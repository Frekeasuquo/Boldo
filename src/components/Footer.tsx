import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Button from "./ui/Button";
import Image from "next/image";
import clsx from "clsx";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {

  const navigationLinks = [
    {
      title: "Landings",
      links: [
        { href: "#", label: "Home" },
        { href: "/product", label: "Products" },
        { href: "/service", label: "Services" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/", label: "Home" },
        {
          href: "#",
          label: "Careers",
          extra: (
            <Button
              label="Hiring!"
              variant="primary"
              className="w-auto h-2 px-4 text-s pb-6 items-center justify-center"
            />
          ),
        },
        { href: "/service", label: "Services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", label: "Blog" },
        { href: "/project", label: "Products" },
        { href: "/service", label: "Services" },
      ],
    },
  ];


  return (
    <section className={clsx("bg-white relative py-6", className)}>
      <MaxWidthWrapper className="max-w-screen-xl px-4 sm:px-6 lg:px-10 w-full">
        {/* Call-to-Action Section */}
        <div className="flex flex-col bg-background h-auto rounded-lg items-center justify-center p-6 lg:p-10">
          <h1 className="text-white text-lg sm:text-xl lg:text-xxl text-center p-4 sm:p-6 lg:p-10 md:w-[70%] w-full">
            An enterprise template to ramp up your company website
          </h1>
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4 sm:gap-2 items-center py-8">
            <input
              type="email"
              className="rounded-full bg-page w-full sm:w-80 h-11 px-4 py-2"
              placeholder="Your email address"
              aria-label="Enter your email address"
            />
            <Button label="Start now" variant="primary" className="w-full md:w-auto border-spacing-1 border-2 border-black px-6 py-2" />
          </div>
        </div>
        {/* Footer Links Section */}
        <div className="flex flex-col lg:flex-row py-12 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="flex-1 flex flex-col md:items-start gap-6">
            <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/LogoShape2.png"
                  alt="Logo"
                  width={24}
                  height={24}
                />
                <span className="text-xxl text-background font-bold">Boldo</span>
              </Link>
              <p className=" text-gray-600 max-w-xs">
                Social media validation business model canvas graphical user
                interface launch party creative Facebook iPad Twitter.
              </p>
              <p className="text-gray-600">
                All rights reserved.
              </p>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
          {navigationLinks.map((section, index) => (
              <div key={index} className="flex flex-col gap-6">
                <span className="text-black font-bold text-lg hover:text-buttonColor">
                  {section.title}
                </span>
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className={`text-gray-600 text-s pb-4 hover:underline ${
                      link.extra ? "flex items-center gap-2" : ""
                    }`}
                  >
                    {link.label}
                    {link.extra && link.extra}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Footer;
