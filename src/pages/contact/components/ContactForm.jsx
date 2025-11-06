import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    const formattedData = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone || "",
      companyName: data.company || "",
      projectType: data.projectType,
      budgetRange: data.budget || "Not specified",
      projectDescription: data.description || "Not provided",
      timeline: data.timeline || "Not provided",
      heardAboutUs: data.heardAboutUs || "N/A",
      additionalNotes: data.additionalNotes || "None",
      receiveUpdates: data.receiveUpdates || false,
      agreedToTerms: data.agreedToTerms || false,
    };

    try {
      const res = await fetch("http://localhost:5000/api/project-inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      if (!res.ok) throw new Error("Failed to submit project inquiry.");
      const result = await res.json();
      console.log("✅ Success:", result);

      setSuccessMsg("Thank you! Your inquiry has been submitted successfully.");
      reset();
    } catch (error) {
      console.error("❌ Error:", error);
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 py-10 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          Start Your Project
        </h2>
        <p className="text-gray-500 mt-2">
          Fill out the form below, and our team will get in touch shortly.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Full Name */}
        <div>
          <label className="text-gray-700 font-medium mb-1 block">
            Full Name *
          </label>
          <input
            {...register("fullName", { required: "Name is required" })}
            type="text"
            placeholder="e.g. John Doe"
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl p-3 transition-all"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-gray-700 font-medium mb-1 block">
            Email *
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="e.g. john@email.com"
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl p-3 transition-all"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="text-gray-700 font-medium mb-1 block">Phone</label>
          <input
            {...register("phone")}
            type="text"
            placeholder="e.g. +92 303 0278190"
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl p-3 transition-all"
          />
        </div>

        {/* Company */}
        <div>
          <label className="text-gray-700 font-medium mb-1 block">
            Company
          </label>
          <input
            {...register("company")}
            type="text"
            placeholder="Optional"
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl p-3 transition-all"
          />
        </div>

        {/* Project Type */}
        <div>
          <label className="text-gray-700 font-medium mb-1 block">
            Project Type *
          </label>
          <select
            {...register("projectType", { required: true })}
            className="w-full border border-gray-300 rounded-xl p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
          >
            <option value="">Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="app-development">App Development</option>
            <option value="ui-ux-design">UI/UX Design</option>
            <option value="branding">Branding</option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <label className="text-gray-700 font-medium mb-1 block">
            Budget Range
          </label>
          <select
            {...register("budget")}
            className="w-full border border-gray-300 rounded-xl p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
          >
            <option value="">Select budget</option>
            <option value="$1,000 - $5,000">$1,000 - $5,000</option>
            <option value="$5,000 - $15,000">$5,000 - $15,000</option>
            <option value="$15,000 - $30,000">$15,000 - $30,000</option>
            <option value="Above $30,000">Above $30,000</option>
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label className="text-gray-700 font-medium mb-1 block">
            Timeline
          </label>
          <select
            {...register("timeline")}
            className="w-full border border-gray-300 rounded-xl p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
          >
            <option value="">Select timeline</option>
            <option value="1 month">1 month</option>
            <option value="3 months">3 months</option>
            <option value="6 months">6 months</option>
            <option value="More than 6 months">More than 6 months</option>
          </select>
        </div>

        {/* Heard About Us */}
        <div>
          <label className="text-gray-700 font-medium mb-1 block">
            How did you hear about us?
          </label>
          <input
            {...register("heardAboutUs")}
            type="text"
            placeholder="e.g. Google, Instagram, Friend..."
            className="w-full border border-gray-300 rounded-xl p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
          />
        </div>

        {/* Description (Full width) */}
        <div className="md:col-span-2">
          <label className="text-gray-700 font-medium mb-1 block">
            Project Description
          </label>
          <textarea
            {...register("description")}
            rows="4"
            placeholder="Briefly describe your project..."
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl p-3 transition-all resize-none"
          ></textarea>
        </div>

        {/* Additional Notes */}
        <div className="md:col-span-2">
          <label className="text-gray-700 font-medium mb-1 block">
            Additional Notes
          </label>
          <textarea
            {...register("additionalNotes")}
            rows="3"
            placeholder="Any extra details..."
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl p-3 transition-all resize-none"
          ></textarea>
        </div>

        {/* Checkboxes */}
        <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-3">
          <label className="flex items-center space-x-2">
            <input type="checkbox" {...register("receiveUpdates")} />
            <span className="text-gray-600">Receive updates and offers</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register("agreedToTerms", { required: true })}
            />
            <span className="text-gray-600">Agree to Terms & Conditions *</span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 font-semibold rounded-xl text-white transition-all duration-200 shadow-md ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Submitting..." : "Submit Inquiry"}
          </button>
        </div>
      </form>

      {/* Messages */}
      {successMsg && (
        <p className="text-green-600 text-center mt-4">{successMsg}</p>
      )}
      {errorMsg && <p className="text-red-600 text-center mt-4">{errorMsg}</p>}
    </motion.div>
  );
};

export default ContactForm;
