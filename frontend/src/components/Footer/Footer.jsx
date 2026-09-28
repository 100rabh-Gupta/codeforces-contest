import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/bookmart-logo.png";
import {
  Truck,
  ShieldCheck,
  Headphones,
  RotateCcw,
  Mail,
  Phone,
  MapPin,
  Send,
  Heart,
  ChevronRight,
  ArrowUp,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setIsSubscribed(true);
    toast.success("Thank you for subscribing to BookMart newsletter!");
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const features = [
    {
      icon: <Truck className="w-6 h-6 text-blue-400" />,
      title: "Fast & Free Shipping",
      desc: "Free delivery on orders over ₹499",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "100% Secure Payment",
      desc: "Encrypted & multi-layer protection",
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-amber-400" />,
      title: "7-Day Easy Returns",
      desc: "Hassle-free refunds & exchange",
    },
    {
      icon: <Headphones className="w-6 h-6 text-purple-400" />,
      title: "24/7 Dedicated Support",
      desc: "Friendly assistance anytime",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Browse All Books", path: "/all-books" },
    { name: "Fiction & Literature", path: "/all-books" },
    { name: "Tech & Programming", path: "/all-books" },
    { name: "Self-Help & Business", path: "/all-books" },
    { name: "Academic & Science", path: "/all-books" },
  ];

  const customerCare = [
    { name: "My Account", path: "/profile" },
    { name: "Order History", path: "/profile/orderHistory" },
    { name: "My Wishlist", path: "/profile/favourites" },
    { name: "Shopping Cart", path: "/cart" },
    { name: "Help Center & FAQs", path: "/all-books" },
    { name: "Shipping Policy", path: "/all-books" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      url: "https://github.com/100rabh-Gupta",
      hoverClass: "hover:bg-zinc-700 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
      url: "https://linkedin.com",
      hoverClass: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-5 h-5" />,
      url: "https://twitter.com",
      hoverClass: "hover:bg-sky-500 hover:text-white",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-5 h-5" />,
      url: "https://instagram.com",
      hoverClass: "hover:bg-pink-600 hover:text-white",
    },
  ];

  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-800/80">
      {/* 1. Value Proposition / Features Highlight Strip */}
      <div className="border-b border-zinc-800/60 bg-zinc-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/40 border border-zinc-800/60 hover:border-zinc-700 transition-all duration-300 group hover:-translate-y-0.5"
              >
                <div className="p-3 rounded-lg bg-zinc-800 group-hover:bg-zinc-700/80 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Main Footer Navigation Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & About Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <Link
                to="/"
                onClick={scrollToTop}
                className="flex items-center gap-3 w-fit group"
              >
                <img
                  src={logo}
                  alt="BookMart Logo"
                  className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  BookMart
                </span>
              </Link>

              <p className="text-sm text-zinc-400 leading-relaxed pr-4">
                Your premier online haven for book lovers. Explore hand-picked
                bestsellers, curated classics, competitive exam materials, and
                enlightening reads delivered directly to your doorstep.
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href="mailto:support@bookmart.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  support@bookmart.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+91 98765 43210 (Mon - Sat, 9am - 7pm)</span>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="pt-2">
              <p className="text-xs uppercase font-semibold text-zinc-400 tracking-wider mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.name}
                    className={`w-9 h-9 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-400 transition-all duration-300 ${item.hoverClass}`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore Store
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-zinc-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Customer Care
            </h3>
            <ul className="space-y-2.5 text-sm">
              {customerCare.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-zinc-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Stay in the Loop
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Subscribe to get exclusive discounts, weekly curated book
              lists, and early access to bestselling releases.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-zinc-900 border border-zinc-700/80 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all pr-12"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-md flex items-center justify-center transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[11px] text-zinc-500">
                🔒 We respect your privacy. Unsubscribe at any time.
              </p>
            </form>

            {/* Back to top button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar: Copyright & Payment Badges */}
      <div className="border-t border-zinc-800/80 bg-zinc-950/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400 text-center md:text-left flex items-center justify-center md:justify-start gap-1 flex-wrap">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-zinc-200">BookMart</span>.
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> by{" "}
            <span className="font-medium text-zinc-200">100rabh Gupta</span>. All
            rights reserved.
          </p>

          {/* Payment Badges */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-500 hidden sm:inline">
              Safe & Secure Payments:
            </span>
            <div className="flex items-center gap-2 text-zinc-400">
              <div
                title="Visa"
                className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded flex items-center hover:text-white transition-colors"
              >
                <FaCcVisa className="w-6 h-4" />
              </div>
              <div
                title="Mastercard"
                className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded flex items-center hover:text-white transition-colors"
              >
                <FaCcMastercard className="w-6 h-4" />
              </div>
              <div
                title="PayPal"
                className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded flex items-center hover:text-white transition-colors"
              >
                <FaCcPaypal className="w-6 h-4" />
              </div>
              <div
                title="Apple Pay"
                className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded flex items-center hover:text-white transition-colors"
              >
                <FaCcApplePay className="w-6 h-4" />
              </div>
              <div
                title="UPI & Net Banking"
                className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-bold tracking-wider text-emerald-400"
              >
                UPI
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
