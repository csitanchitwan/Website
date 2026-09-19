"use client";

import { useEffect, useMemo, useState } from "react";

interface TeamAvatarProps {
  name: string;
  /** Explicit image path. When omitted the photo is resolved from the first name. */
  image?: string;
  /** Folder to look in when resolving by first name. */
  dir?: string;
  /** Extra classes for the image element. */
  className?: string;
}

/**
 * Circular team photo that resolves itself.
 *
 * If `image` is given it is used directly. Otherwise the photo is looked up by
 * the member's FIRST NAME inside `dir`, trying common extensions in turn — so
 * dropping "<FirstName>.jpg" (or .png/.jpeg/.webp) into the folder makes the
 * picture appear on the next load with no code change. Candidates are probed
 * with an off-screen Image() so there is never a broken-image flash; until one
 * resolves a neutral frame is shown, and if none load a consistent initials
 * frame is shown instead — keeping every card the same shape.
 */
export default function TeamAvatar({
  name,
  image,
  dir = "/assets/team2083",
  className = "",
}: TeamAvatarProps) {
  const candidates = useMemo(() => {
    if (image) return [image];
    const first = name.trim().split(/\s+/)[0] || name.trim();
    return ["jpg", "png", "jpeg", "webp"].map(
      (ext) => `${dir}/${first}.${ext}`
    );
  }, [image, name, dir]);

  // Start already-resolved when an explicit path is given (no probing needed).
  const [resolved, setResolved] = useState<string | null>(
    image ? image : null
  );
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (image) {
      setResolved(image);
      setFailed(false);
      return;
    }
    let cancelled = false;
    setResolved(null);
    setFailed(false);
    (async () => {
      for (const src of candidates) {
        const ok = await new Promise<boolean>((res) => {
          const img = new window.Image();
          img.onload = () => res(true);
          img.onerror = () => res(false);
          img.src = src;
        });
        if (cancelled) return;
        if (ok) {
          setResolved(src);
          return;
        }
      }
      if (!cancelled) setFailed(true);
    })();
    return () => {
      cancelled = true;
    };
  }, [candidates, image]);

  const initials = useMemo(
    () =>
      name
        .split(/\s+/)
        .map((w) => w[0])
        .filter(Boolean)
        .slice(0, 2)
        .join("")
        .toUpperCase(),
    [name]
  );

  if (failed) {
    return (
      <div
        className="absolute inset-0 grid place-items-center rounded-full bg-linear-to-br from-[#1b2c48] to-[#1eade6] text-white select-none"
        aria-label={name}
        title={name}
      >
        <span className="text-lg sm:text-2xl font-semibold tracking-wide">
          {initials}
        </span>
      </div>
    );
  }

  if (!resolved) {
    // Neutral placeholder while probing — no broken-image flash.
    return (
      <div
        className="absolute inset-0 rounded-full bg-slate-100 animate-pulse"
        aria-hidden
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolved}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`absolute inset-0 h-full w-full rounded-full object-cover ${className}`}
    />
  );
}
