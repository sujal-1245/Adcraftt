import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
      <p className="text-gray-400 mb-10">Tell us about your project and we’ll get back within 24h.</p>
      <form className="grid gap-6 max-w-xl mx-auto">
        <input type="text" placeholder="Name" className="p-4 rounded-xl bg-black/70 border border-gray-700 focus:border-white outline-none" />
        <input type="email" placeholder="Email" className="p-4 rounded-xl bg-black/70 border border-gray-700 focus:border-white outline-none" />
        <textarea rows="4" placeholder="Project details" className="p-4 rounded-xl bg-black/70 border border-gray-700 focus:border-white outline-none" />
        <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
