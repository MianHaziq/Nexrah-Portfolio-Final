"use client";

import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import Lottie from "lottie-react";
import emailjs from "emailjs-com";
import animationData from "./Animation.json";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  [key: string]: string;
}

type Errors = Partial<Record<keyof FormState, string>>;
type ToastType = "success" | "error" | "info";

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

interface Toast {
  id: number;
  type: ToastType;
  message: string;
}

const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending">("idle");
  const [toasts, setToasts] = useState<Toast[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (fields?: Partial<FormState>): Errors => {
    const f = fields ?? form;
    const newErrors: Errors = {};
    if (!f.name || f.name.trim().length < 2)
      newErrors.name = "Please enter your name (2+ characters).";
    if (!f.email) newErrors.email = "Email is required.";
    else if (!isValidEmail(f.email)) newErrors.email = "Enter a valid email address.";
    if (!f.subject || f.subject.trim().length < 2)
      newErrors.subject = "Please enter a subject.";
    if (!f.message || f.message.trim().length < 6)
      newErrors.message = "Message should be at least 6 characters.";
    return newErrors;
  };

  const showToast = (type: ToastType, message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000); // auto-hide after 4s
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      showToast("error", "Please fix the errors in the form.");
      return;
    }

    setStatus("sending");

    const templateParams = {
      user_name: form.name,
      user_email: form.email,
      user_subject: form.subject,
      message: form.message,
      year: new Date().getFullYear(),
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setForm({ name: "", email: "", subject: "", message: "" });
      showToast("success", "Message sent successfully! 🎉");
    } catch (error) {
      console.error("EmailJS error:", error);
      showToast("error", "Something went wrong. Please try again.");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-black text-black relative">
       <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-amber-400 uppercase text-center mb-10">
          Contact us
        </h1>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          {/* Left Side - Form */}
          <div className="w-full md:w-1/2 bg-white border border-gray-200 shadow-2xl rounded-2xl p-8 md:p-10">
            <h3 className="text-3xl md:text-4xl font-semibold mb-3 text-center text-gray-900">
              Get in Touch
            </h3>
            <p className="text-base text-gray-600 mb-6 text-center">
              Have a project or question? Let’s connect and create something amazing together.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["name", "email"].map((field) => (
                  <label key={field} className="flex flex-col">
                    <span className="text-sm font-medium mb-1 capitalize">{field}</span>
                    <input
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      value={form[field]}
                      onChange={handleChange}
                      placeholder={`Your ${field}`}
                      className={`px-4 py-3 rounded-lg bg-gray-50 border text-black placeholder-gray-500 focus:ring-2 focus:ring-sky-400 focus:outline-none transition-all duration-200 ${
                        errors[field as keyof FormState] ? "border-red-400" : "border-gray-300"
                      }`}
                    />
                    {errors[field as keyof FormState] && (
                      <span className="mt-1 text-xs text-red-500">
                        {errors[field as keyof FormState]}
                      </span>
                    )}
                  </label>
                ))}
              </div>

              {["subject", "message"].map((field) => (
                <label key={field} className="flex flex-col mt-4">
                  <span className="text-sm font-medium mb-1 capitalize">{field}</span>
                  {field === "message" ? (
                    <textarea
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className={`px-4 py-3 rounded-lg bg-gray-50 border text-black placeholder-gray-500 focus:ring-2 focus:ring-sky-400 focus:outline-none transition-all duration-200 ${
                        errors.message ? "border-red-400" : "border-gray-300"
                      }`}
                    />
                  ) : (
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Your subject"
                      className={`px-4 py-3 rounded-lg bg-gray-50 border text-black placeholder-gray-500 focus:ring-2 focus:ring-sky-400 focus:outline-none transition-all duration-200 ${
                        errors.subject ? "border-red-400" : "border-gray-300"
                      }`}
                    />
                  )}
                  {errors[field as keyof FormState] && (
                    <span className="mt-1 text-xs text-red-500">
                      {errors[field as keyof FormState]}
                    </span>
                  )}
                </label>
              ))}

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold shadow-lg hover:from-fuchsia-600 hover:to-cyan-600 transition-all duration-300 disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Animation */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-4">
            <div className="w-full max-w-md md:max-w-lg">
              <Lottie animationData={animationData} loop autoplay />
            </div>
          </div>
        </div>
      </div>

    
<div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50 items-end">
  {toasts.map((toast) => (
    <div
      key={toast.id}
      className={`flex items-center w-96 p-6 rounded-xl shadow-xl border-l-8 transition-transform transform hover:scale-105 ${
        toast.type === "success"
          ? "bg-white border-green-600 text-green-700"
          : toast.type === "error"
          ? "bg-white border-red-600 text-red-700"
          : "bg-white border-blue-600 text-blue-700"
      }`}
    >
      <span className="font-semibold text-lg">{toast.message}</span>
    </div>
  ))}
</div>

    </section>
  );
};

export default ContactSection;
