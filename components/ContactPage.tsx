"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import Lottie from "lottie-react";
import animationData from "./Animation.json";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setStatus("error");
      return;
    }

    setStatus("sending");

    setTimeout(() => {
      console.log("Form submitted:", form);
      setForm({ name: "", email: "", subject: "", message: "" });
      setStatus("success");
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-black text-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          {/* Left: Contact Form */}
          <div className="w-full md:w-1/2 bg-white border border-gray-200 shadow-xl rounded-2xl p-8 md:p-10">
            <h3 className="text-3xl md:text-4xl font-semibold mb-3 text-center ">
              Get in Touch
            </h3>
            <p className="text-base text-gray-600 mb-6">
              Have a project or question? Let’s connect and create something amazing.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["name", "email"].map((field) => (
                  <label key={field} className="flex flex-col">
                    <span className="text-sm font-medium mb-1 capitalize">{field}</span>
                    <input
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      value={(form as any)[field]}
                      onChange={handleChange}
                      placeholder={`Your ${field}`}
                      className={`px-4 py-3 rounded-lg bg-gray-50 border text-black placeholder-gray-500 focus:ring-2 focus:ring-sky-400 focus:outline-none ${
                        errors[field as keyof FormState]
                          ? "border-red-400"
                          : "border-gray-300"
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
                      className={`px-4 py-3 rounded-lg bg-gray-50 border text-black placeholder-gray-500 focus:ring-2 focus:ring-sky-400 focus:outline-none ${
                        errors.message ? "border-red-400" : "border-gray-300"
                      }`}
                    />
                  ) : (
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Your subject"
                      className={`px-4 py-3 rounded-lg bg-gray-50 border text-black placeholder-gray-500 focus:ring-2 focus:ring-sky-400 focus:outline-none ${
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

              <div className="mt-6 flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold transition-all shadow-md"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                <div aria-live="polite" className="min-h-[24px]">
                  {status === "success" && (
                    <span className="text-sm text-green-600">
                      Message sent successfully 🎉
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-sm text-red-600">
                      Please check the form again.
                    </span>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Right: Lottie Animation */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-4">
            <div className="w-full max-w-lg">
              <Lottie animationData={animationData} loop autoplay />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
