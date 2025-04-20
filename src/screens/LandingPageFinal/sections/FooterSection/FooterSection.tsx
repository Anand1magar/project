import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";

// Define footer link data for mapping
const footerLinks = [
  {
    category: "Product",
    links: [
      { name: "Overview", isUnderlined: true },
      { name: "Features", isUnderlined: false },
    ],
  },
  {
    category: "Company",
    links: [
      { name: "How it works", isUnderlined: false },
      { name: "About", isUnderlined: false },
      { name: "Blog", isUnderlined: false },
    ],
  },
  {
    category: "Support",
    links: [
      { name: "Contact", isUnderlined: false },
      { name: "Terms", isUnderlined: false },
      { name: "Privacy", isUnderlined: false },
      { name: "Cookies", isUnderlined: false },
    ],
  },
];

// Social media icons data
const socialIcons = [
  { Icon: FacebookIcon, alt: "Facebook" },
  { Icon: TwitterIcon, alt: "Twitter" },
  { Icon: InstagramIcon, alt: "Instagram" },
  { Icon: LinkedinIcon, alt: "LinkedIn" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-start gap-5 pt-[70px] pb-10 px-[120px] relative self-stretch w-full flex-[0_0_auto] bg-[#f6f6f7]">
      <div className="flex flex-wrap items-start gap-[115px] relative self-stretch w-full">
        {/* Logo and company info section */}
        <div className="flex flex-col min-w-[150px] items-start gap-3.5 relative flex-1 grow">
          <div className="relative w-[102px] h-[43.19px]">
            <div className="relative h-[43px]">
              <div className="absolute w-[102px] h-10 top-0 left-0">
                <div className="relative w-[100px] h-10">
                  <img
                    className="absolute w-[23px] h-[17px] top-[11px] left-0"
                    alt="Vector"
                    src="/vector.svg"
                  />
                  <div className="absolute w-[77px] top-0 left-[23px] [font-family:'Inter',Helvetica] font-bold text-[#e01836] text-[22.7px] tracking-[2.04px] leading-[40.4px] whitespace-nowrap">
                    OKMA
                  </div>
                </div>
              </div>
              <div className="absolute w-[91px] top-9 left-[9px] [font-family:'Inter',Helvetica] font-normal text-[#e01836] text-[6.3px] text-center tracking-[4.72px] leading-[7.4px] whitespace-nowrap">
                TECHNOLOGY
              </div>
            </div>
          </div>

          <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#667085] text-base tracking-[-0.32px] leading-[25.6px]">
            Design amazing digital experiences that create <br />
            more happy in the world.
          </p>

          {/* Social media icons */}
          <div className="inline-flex items-center justify-end gap-2.5 relative">
            {socialIcons.map((social, index) => (
              <button
                key={index}
                className="w-6 h-6 flex items-center justify-center"
              >
                <social.Icon className="w-5 h-5 text-gray-600" />
              </button>
            ))}
          </div>
        </div>

        {/* Footer links section */}
        <div className="flex-wrap gap-[60px_77px] flex items-start relative flex-1 grow">
          {footerLinks.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-[31px] relative"
            >
              <h3 className="relative self-stretch h-6 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#667085] text-lg tracking-[0] leading-[23.4px] whitespace-nowrap">
                {category.category}
              </h3>
              <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                {category.links.map((link, linkIndex) => (
                  <div
                    key={linkIndex}
                    className="flex flex-col items-start relative self-stretch w-full"
                  >
                    <a
                      href="#"
                      className={`relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1d2939] text-base tracking-[-0.32px] leading-[25.6px] whitespace-nowrap ${link.isUnderlined ? "underline" : ""}`}
                    >
                      {link.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright section */}
      <div className="flex items-center gap-2.5 pt-[30px] pb-2.5 px-2.5 relative self-stretch w-full border-t border-gray-300">
        <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1d2939] text-base tracking-[-0.32px] leading-[25.6px] whitespace-nowrap">
          © 2025 Tokma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
