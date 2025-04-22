import { Smartphone, StarIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";



export const HeroSection = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "Features", width: "76px" },
    { label: "How it works", width: "101px" },
    { label: "Contact", width: "72px" },  
    { label: "About", width: "60px" },
  ];


    return (
      <section className="bg-gray-50 min-h-screen flex flex-col  justify-start  items-center text-center px-4  ">

        {/* Top Navigation Style (optional if already handled elsewhere) */}
       
          <div className="flex items-center gap-2 mt-10 ">
         
            {/* <nav className="hidden md:flex gap-6 text-gray-600 font-medium ml-4">
              <a href="#">Features</a>
              <a href="#">How it works</a>
              <a href="#">Contact</a>
              <a href="#">About</a>
            </nav> */}

                   {/* Navigation bar */}
        <div className="flex max-w-[650px] w-[650px] items-center justify-between px-6 py-3   bg-white rounded-[46px] shadow-[0px_1px_3px_#1018281a,0px_1px_2px_#1018280f] border border-solid border-[#f2f4f7]">
          <img className="relative w-9 h-9" alt="Logo" src="/logo.svg" />

          <nav className=" inline-flex items-center gap-6 relative">
            {navItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#000000b2] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                  {item.label}
                </div>
                <div
                  className="absolute h-[17px] top-0 rounded-[50px]"
                  style={{
                    width: item.width,
                    left:
                    index === 0
                    ? 0
                        : index === 1
                        ? "76px"
                          : index === 2
                            ? "177px"
                            : "249px",
                          }}
                />
              </React.Fragment>
            ))}
          </nav>
            {/* <img className="relative w-9 h-9" alt="Logo" src="/logo.svg" /> */}
            {/* <button className="bg-red-600 text-white px-6 py-2 rounded-md text-sm font-medium shadow-md hover:bg-red-600">
              Download
            </button> */}
                  <Button className="inline-flex items-center justify-center gap-1.5px-6 py-2.5 bg-[#e01836] text-white rounded-lg shadow-[inset_0px_1px_0px_1px_#ffffff1a,0px_1px_3px_#0908070d,0px_1px_2px_#09080708] border border-solid border-red-700">
            <span className=" text-sm leading-6">
            Get the app
            </span>
            <Smartphone className="w-5 h-5" />
          </Button>

          </div>
          
        </div>
       
  
        {/* Hero Content */}
        <div className="mt-24 max-w-2xl">
          <h1 className="font-semibold text-[#1d2939] text-4xl text-center tracking-[-0.72px] leading-[44px] w-full">
            Tokma – Your Everyday <br /> Helping Hand
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mt-4">
            All-in-one local service app for rides, guidance, support, and safety—
            <br className="hidden sm:block" />
            everything you need, right from your phone.
          </p>
  
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <Button className="inline-flex items-center justify-center gap-1.5px-6 py-2.5 bg-[#e01836] text-white rounded-lg shadow-[inset_0px_1px_0px_1px_#ffffff1a,0px_1px_3px_#0908070d,0px_1px_2px_#09080708] border border-solid border-red-700">
            <span className=" text-sm leading-6">
            Get the app
            </span>
            <Smartphone className="w-5 h-5" />
          </Button>
            <button className="bg-white text-gray-800 border border-gray-300 px-6 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-100">
              Get Started
            </button>
          </div>  
  
          {/* Social Proof */}
          <div className="inline-flex items-center gap-2 relative py-8">
              <div className="inline-flex items-center relative">
                {[
                  "/z9qf3dnysbw0t70hu1s64en34o-jpg.png",
                  "/y2qgmvzz3dwkqtfsa3p9kxqsey-png.png",
                  "/cpqqqqnssihmc7iy7craf6rj0-png.png",
                ].map((src, index) => (
                  <div
                    key={index}
                    className={`relative w-[27.63px] h-[27.63px] ${index > 0 ? "ml-[-7px]" : ""} bg-[#ffffff01] rounded-[81.25px] overflow-hidden shadow-[0px_16.25px_19.5px_-3.25px_#10182814,0px_6.5px_6.5px_-3.25px_#10182808]`}
                  >
                    <div
                      className={`w-7 h-7 rounded-[81.25px] bg-[url(${src})] bg-cover bg-[50%_50%]`}
                    >
                      <div className="h-7 rounded-[81.25px] border-[1.63px] border-solid border-white" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative w-[131.96px] h-[19.5px] [font-family:'Inter',Helvetica] font-medium text-black text-[11.4px] tracking-[-0.24px] leading-[19.3px] whitespace-nowrap">
                Trusted by 17,000+ users
              </div>
            </div>
          </div>
        
        
    
        {/* Placeholder Mockup Box */}
        <div className=" absolute bottom-0 w-3/4 h-[350px] bg-black"> 
              
        </div> 
      </section>
    );
   
  
};
