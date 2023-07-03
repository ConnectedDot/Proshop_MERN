import { FaGooglePlay, FaApple } from "react-icons/fa";

export const footerMenuItems = {
  companyInfo: {
    logo: "https://github.com/ConnectedDot/Proshop_MERN/blob/master/frontend/src/assets/logo.png",
    address: "4967 Sardis Sta, Victoria 8007, Montreal.",
    tel: "+1 246-345-0695",
    email: "info@learnup.com",
  },
  navigation: {
    title: "Navigations",
    menu: [
      { title: "About Us", link: "#about-us" },
      { title: "FAQs Page", link: "#faqs" },
      { title: "Checkout", link: "#checkout" },
      { title: "Contact", link: "#contact" },
      { title: "Blog", link: "#blog" },
    ],
  },
  categories: {
    title: "New Categories",
    menu: [
      { title: "Designing", link: "#about-us" },
      { title: "Business", link: "#faqs" },
      { title: "Software", link: "#checkout" },
      { title: "WordPress", link: "#contact" },
      { title: "PHP", link: "#blog" },
    ],
  },
  help_support: {
    title: "Help & Support",
    menu: [
      { title: "Documentation", link: "#about-us" },
      { title: "Live Chat", link: "#faqs" },
      { title: "Mail Us", link: "#checkout" },
      { title: "Privacy", link: "#contact" },
      { title: "FAQs", link: "#blog" },
    ],
  },
  downloads: {
    title: "Download Apps",
    menu: [
      {
        title: "Google Play",
        link: "#about-us",
        sub: "Get it Now",
        icon: FaGooglePlay,
      },
      {
        title: "App Store",
        link: "#about-us",
        sub: "Now it Available",
        icon: FaApple,
      },
    ],
  },
};
