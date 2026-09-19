"use client";

import { useEffect, useState } from "react";
import { WifiOff } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Shows a clean, on-theme banner when the browser loses its network
 * connection, and hides it automatically once the connection returns.
 */
export default function OfflineNotice() {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    const update = () => setOffline(!navigator.onLine);
    update();
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);

  return (
    <AnimatePresence>
      {offline && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25 }}
          role="status"
          aria-live="polite"
          className="fixed inset-x-0 bottom-4 z-[100] mx-auto flex w-[calc(100%-2rem)] max-w-md items-center gap-3 rounded-2xl border border-[#1eade6]/30 bg-[#1b2c48] px-4 py-3 text-white shadow-xl"
        >
          <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-[#cf4446]/90">
            <WifiOff size={18} />
          </span>
          <div className="text-sm">
            <p className="font-semibold">You&apos;re offline</p>
            <p className="text-white/70">
              Check your internet connection — we&apos;ll reconnect automatically.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
