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

const isValidEmail = (email: string) => {
  // simple, practical email check
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<null | "idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));

    // clear field error while user types
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (fields?: Partial<FormState>): Errors => {
    const f = fields ?? form;
    const newErrors: Errors = {};
    if (!f.name || f.name.trim().length < 2) newErrors.name = "Please enter your name (2+ characters).";
    if (!f.email) newErrors.email = "Email is required.";
    else if (!isValidEmail(f.email)) newErrors.email = "Enter a valid email address.";
    if (!f.subject || f.subject.trim().length < 2) newErrors.subject = "Please enter a subject.";
    if (!f.message || f.message.trim().length < 6) newErrors.message = "Message should be at least 6 characters.";
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

    // NOTE: placeholder send logic. Replace with API/email service integration as needed.
    setStatus("sending");

    try {
      // For now just log and show success (synchronous). Replace with fetch/emailjs as required.
      // Doing it synchronously keeps this example free of environment-specific assumptions.
      // In a real app you would `await fetch(...)` or call your email API here.
      // eslint-disable-next-line no-console
      console.log("Contact form submitted:", form);

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      setStatus("error");
    }
  };

  return (

    
    <section id="contact" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          {/* Left: Contact form */}
          <div className="w-full md:w-1/2 bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-10 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Get in touch</h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6">
              Have a project, question or just want to say hi? Fill out the form and I'll get back to you.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium mb-1">Name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    placeholder="Your name"
                    className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-sky-400 dark:bg-gray-800 dark:border-gray-700 ${
                      errors.name ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                  {errors.name && (
                    <span id="name-error" className="mt-1 text-xs text-red-500">
                      {errors.name}
                    </span>
                  )}
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium mb-1">Email</span>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    placeholder="you@domain.com"
                    className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-sky-400 dark:bg-gray-800 dark:border-gray-700 ${
                      errors.email ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                  {errors.email && (
                    <span id="email-error" className="mt-1 text-xs text-red-500">
                      {errors.email}
                    </span>
                  )}
                </label>
              </div>

              <label className="flex flex-col mt-4">
                <span className="text-sm font-medium mb-1">Subject</span>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  placeholder="Project / question subject"
                  className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-sky-400 dark:bg-gray-800 dark:border-gray-700 ${
                    errors.subject ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.subject && (
                  <span id="subject-error" className="mt-1 text-xs text-red-500">
                    {errors.subject}
                  </span>
                )}
              </label>

              <label className="flex flex-col mt-4">
                <span className="text-sm font-medium mb-1">Message</span>
                <textarea
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="Tell me about your project or question..."
                  className={`px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-sky-400 dark:bg-gray-800 dark:border-gray-700 ${
                    errors.message ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.message && (
                  <span id="message-error" className="mt-1 text-xs text-red-500">
                    {errors.message}
                  </span>
                )}
              </label>

              <div className="mt-5 flex items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-sky-500 text-white font-medium shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-60"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                <div aria-live="polite" className="min-h-[24px]">
                  {status === "success" && <span className="text-sm text-green-600">Message sent — thank you!</span>}
                  {status === "error" && <span className="text-sm text-red-600">Please fix the errors above.</span>}
                </div>
              </div>
            </form>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center p-4">
           <div className="w-full max-w-xl">
  <Lottie animationData={animationData} loop autoplay />
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
