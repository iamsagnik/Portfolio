import { useState } from "react";
import { Github, Linkedin, Twitter, Send, Mail, MapPin } from "lucide-react";
import {PixelCard} from "../components";

const socialLinks = [
  { Icon: Github, href: "https://github.com/iamsagnik", label: "GitHub", username: "iamsagnik" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/sagnik-mitra10/", label: "LinkedIn", username: "Sagnik Mitra" },
  // { Icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter", username: "@yourusername" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulated API call
    setTimeout(() => {
      alert("Message sent!");
      setForm({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-[#282828] py-16">
      <div className="max-w-5xl mx-auto px-4 m-3">
        <div className="text-center mb-12">
          <h2 className="text-[#FFC000] mb-2 text-sm font-semibold uppercase tracking-wider">Contact</h2>
          <p className="text-3xl font-bold text-white mb-2">Let's Connect</p>
          <p className="text-gray-400 max-w-2xl mx-auto">Have a project in mind or just want to say hi? Feel free to reach out.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Message Form */}
          <div className="bg-[#404040] p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-white">
              <Send className="h-5 w-5 text-[#FFC000]" /> Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full mt-1 p-2 border border-gray-300 rounded bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full mt-1 p-2 border border-gray-300 rounded bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Hi, I'd like to discuss..."
                  className="w-full mt-1 p-2 border border-gray-300 rounded bg-white"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 bg-[#FFC000] text-white text-sm font-semibold rounded hover:bg-[#FFC000]/80 transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info and Social Links */}
          <div className="space-y-6">
            <div className="bg-[#404040] p-6 rounded-xl shadow">
              <h3 className="text-2xl font-semibold mb-4 text-white">Contact Details</h3>
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-5 w-5 text-[#FFC000]" />
                <a href="mailto:alex.johnson@example.com" className="text-gray-400 hover:text-[#FFC000]">
                  sagnikmitra008@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#FFC000]" />
                <span className="text-white">Cooch Behar, India</span>
              </div>
            </div>

            <div className="bg-[#404040] p-6 rounded-xl shadow">
              <h3 className="text-2xl font-semibold mb-4 text-white">Find Me Online</h3>
              <div className="space-y-3">
                {socialLinks.map(({ Icon, href, label, username }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#6B9797] hover:text-[#FFC000] transition"
                  >
                    <Icon className="h-6 w-6 text-[#FFC000]" />
                    <span>
                      {label}: <span className="font-medium text-white">{username}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;