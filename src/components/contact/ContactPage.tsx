"use client";

import Link from "next/link";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const socialLinks = [
  { name: "Facebook", icon: FaFacebook, url: "https://www.facebook.com/csitanchitwanofficial" },
  { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/csitanchitwan/" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/csit-association-of-chitwan-b6664b273/" },
  { name: "YouTube", icon: FaYoutube, url: "https://www.youtube.com/@csitanchitwan" },
];

const contactInfo = [
  { icon: FaMapMarkerAlt, label: "Address", value: "Bharatpur, Chitwan, Nepal", href: undefined as string | undefined },
  { icon: FaPhoneAlt, label: "Phone", value: "+977-9824238746", href: "tel:+9779824238746" },
  { icon: FaEnvelope, label: "Email", value: "csitanchitwanofficial@gmail.com", href: "mailto:csitanchitwanofficial@gmail.com" },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
type ErrorState = Partial<Record<keyof FormData, string>>;
interface StatusState {
  type: "success" | "error" | "";
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<ErrorState>({});
  const [status, setStatus] = useState<StatusState>({ type: "", message: "" });

  const validate = () => {
    const e: ErrorState = {};
    if (!formData.firstName.trim()) e.firstName = "First name is required.";
    if (!formData.lastName.trim()) e.lastName = "Last name is required.";
    if (!formData.email.trim()) e.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) e.email = "Enter a valid email.";
    if (!formData.phone.trim()) e.phone = "Phone number is required.";
    else if (!/^[0-9+\-\s]{7,15}$/.test(formData.phone)) e.phone = "Enter a valid phone number.";
    if (!formData.subject.trim()) e.subject = "Subject is required.";
    if (!formData.message.trim()) e.message = "Message cannot be empty.";
    return e;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setStatus({ type: "error", message: "Please fill all required fields correctly." });
      return;
    }
    setStatus({ type: "success", message: "Message sent successfully! We'll be in touch soon." });
    setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setStatus({ type: "", message: "" }), 4000);
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-white to-[#eefaff] text-slate-800 antialiased">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1eade6]">
            CSIT Student Network
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-[#1b2c48] sm:text-4xl md:text-5xl">
            Get in Touch With Our <span className="text-[#cf4446]">Community</span>
          </h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Have questions about events, workshops or want to collaborate with us?
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-5 lg:gap-8">
          {/* Info card */}
          <div className="lg:col-span-2 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="h-1.5 w-full bg-linear-to-r from-[#1eade6] to-[#cf4446]" />
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[#1b2c48] sm:text-2xl">How to Reach Us</h3>
              <p className="mt-1 text-sm text-slate-500">We usually respond within a day.</p>

              <div className="mt-8 space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => {
                  const body = (
                    <>
                      <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-[#1eade6]/10 text-[#1eade6] transition-colors group-hover:bg-[#1eade6] group-hover:text-white">
                        <Icon />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                          {label}
                        </span>
                        <span className="font-medium break-words text-[#1b2c48]">
                          {value}
                        </span>
                      </span>
                    </>
                  );
                  return href ? (
                    <Link key={label} href={href} className="group flex items-center gap-4">
                      {body}
                    </Link>
                  ) : (
                    <div key={label} className="group flex items-center gap-4">
                      {body}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-slate-100 pt-6">
                <p className="mb-4 font-semibold text-[#1b2c48]">Connect With Us</p>
                <div className="flex gap-3">
                  {socialLinks.map(({ name, icon: Icon, url }) => (
                    <Link
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-[#1b2c48] transition-colors hover:border-[#1eade6] hover:bg-[#1eade6] hover:text-white"
                    >
                      <Icon size={18} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="lg:col-span-3 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="h-1.5 w-full bg-linear-to-r from-[#cf4446] to-[#1eade6]" />
            <div className="p-6 sm:p-8">
              <h2 className="text-xl font-bold text-[#1b2c48] sm:text-2xl">Send Us a Message</h2>
              <p className="mb-6 text-sm text-slate-500">Fill in the form and we&apos;ll get back to you.</p>

              {status.message && (
                <div
                  className={`mb-6 rounded-xl p-3 text-center text-sm font-semibold ${
                    status.type === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="input" aria-invalid={!!errors.firstName} />
                    {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
                  </div>
                  <div>
                    <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="input" aria-invalid={!!errors.lastName} />
                    {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <input name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="input" aria-invalid={!!errors.email} />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>
                  <div>
                    <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="input" aria-invalid={!!errors.phone} />
                    {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="input" aria-invalid={!!errors.subject} />
                  {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject}</p>}
                </div>

                <div>
                  <textarea name="message" rows={5} placeholder="Your message..." value={formData.message} onChange={handleChange} className="input resize-none" aria-invalid={!!errors.message} />
                  {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1eade6] px-6 py-3.5 font-semibold text-white shadow-md transition-colors hover:bg-[#1b2c48] focus:outline-none focus:ring-4 focus:ring-[#1eade6]/30 sm:w-auto"
                >
                  Send Message
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
