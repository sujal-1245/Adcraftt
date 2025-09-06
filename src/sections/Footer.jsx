import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/10 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} ADCRAFT. All Rights Reserved.
    </footer>
  );
};

export default Footer;
