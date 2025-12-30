"use client";
const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/csitanchitwan",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/csitanchitwan",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/company/csitanchitwan",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://www.youtube.com/@csitanchitwan",
  },
];


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
  FaTiktok,
  FaUser,
} from "react-icons/fa";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ErrorState {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

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
  const [status, setStatus] = useState<StatusState>({
    type: "",
    message: "",
  });

  // Validation fields
  const validate = () => {
    const newErrors: ErrorState = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is Required.";

    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is Required.";

    if (!formData.email.trim()) newErrors.email = "Email is Required.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Enter a valid email.";

    if (!formData.phone.trim()) newErrors.phone = "Phone Number is Required.";
    else if (!/^[0-9]{7,15}$/.test(formData.phone))
      newErrors.phone = "Enter a valid phone number.";

    if (!formData.subject.trim()) newErrors.subject = "Subject is Required.";

    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    return newErrors;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus({ type: "error", message: "Please fill all required fields." });
      return;
    }

    setStatus({ type: "success", message: "Message sent successfully!" });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setStatus({ type: "", message: "" }), 4000);
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-[#f5fbff] via-white to-[#fdfefe] text-slate-800 antialiased">
     
      <section className="mx-auto px-6 lg:px-10 py-16 sm:py-24">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
        <p className="uppercase tracking-widest text-[#1eade6] font-semibold text-sm">
          CSIT Student Network
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-slate-900 leading-tight">
          Get in Touch With Our <span className="text-[#cf4446]"> Community</span>
        </h1>
        <p className="mt-4 text-[#1e7c85] text-lg">
          Have questions about events, workshops or want to collaborate with us?  
          We’d love to hear from you.
        </p>
      </div>

        {/* Contact Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* Info Panel */}
        <div className="bg-linear-to-br from-[#1eade6] to-[#cf4446] rounded-3xl p-6 sm:p-10 text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">How to Reach Us</h3>

          <div className="space-y-6 text-lg">
            <div className="flex gap-4 items-start ">
              <FaMapMarkerAlt className="mt-1" />
              <span>Bharatpur, Chitwan Nepal</span>
            </div>

            <Link  href="tel:+9779824238746" className="flex gap-4 items-start hover:underline">
              <FaPhoneAlt className="mt-1" />
              <span>+977-9824238746</span>
            </Link>

            <Link href="mailto:csitanchitwanofficial@gmail.com" className="flex gap-4 items-start hover:underline">
              <FaEnvelope className="mt-1" />
              <span>csitanchitwanofficial@gmail.com</span>
            </Link>
          </div>

          <div className="mt-12">
            <p className="text-lg text-green-200 font-semibold mb-4">Connect With Us</p>
            <div className="flex gap-4">
              {socialLinks.map(({ name, icon: Icon, url }) => (

                <Link key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name} className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition cursor-pointer">
                  <Icon size={18} />
                </Link>
              )
              )}
            </div>
          </div>
        </div>

        {/* Form Panel */}
        <div className="bg-gray-50 p-6 sm:p-10 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1eade6] text-center pb-8 ">Send Us a Message</h2>
          {status.message && (
            <div
              className={`mb-6 p-3 rounded-xl text-center text-sm font-semibold ${
                status.type === "success"
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="input"/>
              <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="input"/>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="input"/>
              <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="input"/>
            </div>

            <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="input"/>

            <textarea name="message" rows={5} placeholder="Your message..." value={formData.message} onChange={handleChange} className="input resize-none"/>

            <button type="submit" className="group inline-flex items-center gap-3 bg-gray-100 text-[#1eade6] px-5 py-3 border rounded-lg font-semibold shadow-lg transform transition-all duration-200 ease-out motion-safe:transform-gpu hover:scale-105 hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-[#ef4446]/70 hover:to-[#1eade6] hover:text-white focus:outline-none focus:ring-4 focus:ring-white/30 fill-[#1eade6] hover:fill-white font-poppins cursor-pointer" > <span className="sr-only">Submit contact form</span> Submit <svg className="w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /> </svg> </button>
          </form>
        </div>
      </div>
      </section>
    </main>
  );
};

export default ContactPage;