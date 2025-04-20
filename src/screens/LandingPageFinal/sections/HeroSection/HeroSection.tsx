import { StarIcon } from "lucide-react";
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
    <section className="relative w-full h-[1008px] bg-gray-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="relative w-[2592px] h-[1244px] top-[-222px] left-[-623px]">
        <div className="absolute w-[2592px] h-[678px] top-0 left-0 overflow-hidden">
          <div className="absolute w-[98px] h-[1190px] top-[-170px] left-[142px] rounded-[644px] rotate-[-56deg] blur [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />

          <div className="absolute w-[1382px] h-[1061px] top-0 left-[585px]">
            <div className="absolute w-[63px] h-[771px] top-[50px] left-[306px] rounded-[417px] rotate-[-56deg] blur [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />

            <img
              className="absolute w-[911px] h-[911px] top-[75px] "
              alt="Gradient blur"
              src="/gradient-blur.svg"
            />

            <div className="absolute w-[98px] h-[1190px] -top-16 left-[716px] rounded-[644px] rotate-[32deg] blur-[6.75px] [background:linear-gradient(182deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />

            <div className="absolute w-[63px] h-[771px] top-[50px] left-[1084px] rounded-[417px] rotate-[39deg] blur [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />
          </div>

          <div className="absolute w-[98px] h-[1189px] top-[-209px] left-[2270px] rounded-[643.5px] rotate-[51deg] blur [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />
        </div>

        {/* Navigation bar */}
        <Card className="flex max-w-[650px] w-[650px] items-center justify-between px-6 py-3 absolute top-[252px] left-[1018px] bg-white rounded-[46px] shadow-[0px_1px_3px_#1018281a,0px_1px_2px_#1018280f] border border-solid border-[#f2f4f7]">
          <img className="relative w-9 h-9" alt="Logo" src="/logo.svg" />

          <nav className="inline-flex items-center gap-6 relative">
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

          <Button className="relative w-[153.37px] h-11 bg-[#e01836] rounded-lg text-white border border-solid border-red-700 shadow-[inset_0px_1px_0px_1px_#ffffff1a,0px_1px_3px_#0908070d,0px_1px_2px_#09080708]">
            <span className="absolute w-[86px] h-6 top-2 left-6 [font-family:'Inter',Helvetica] font-medium text-white text-[15.1px] tracking-[0] leading-6 whitespace-nowrap">
              Get the app
            </span>
            <div className="absolute w-5 h-5 top-3 left-[117px]">
              <img
                className="absolute w-[11px] h-[18px] top-px left-1"
                alt="Group"
                src="/group.png"
              />
            </div>
          </Button>
        </Card>

        {/* Hero content */}
        <div className="flex flex-col max-w-[760px] w-[760px] h-[358px] items-center gap-10 absolute top-[385px] left-[963px]">
          <div className="flex flex-col max-w-[760px] items-center gap-5 relative w-full">
            <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#1d2939] text-[56px] text-center tracking-[-2.60px] leading-[72.8px]">
              {" "}
              Tokma – Your Everyday Helping Hand
            </h1>

            <p className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-gray-500 text-2xl text-center tracking-[-0.50px] leading-[33px]">
              All-in-one local service app for rides, guidance, support, and
              safety—everything you need, right from your phone.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3.5 relative self-stretch w-full">
            <div className="flex flex-wrap items-start justify-center gap-[14px_14px] relative self-stretch w-full">
              <Button className="inline-flex items-center justify-center gap-[7.99px] pl-6 pr-[16.01px] py-2.5 relative bg-[#e01836] rounded-lg border border-solid border-red-700 shadow-[inset_0px_1px_0px_1px_#ffffff1a,0px_1px_3px_#0908070d,0px_1px_2px_#09080708]">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[15.4px] tracking-[0] leading-6 whitespace-nowrap">
                  Download Now
                </span>
                <StarIcon className="relative w-5 h-5 text-white" />
              </Button>

              <Button
                variant="outline"
                className="inline-flex items-center justify-center px-6 py-2.5 relative bg-white rounded-lg border border-solid border-[#e6e2e0] shadow-[0px_1px_2px_#09080708,0px_1px_3px_#0908070d]"
              >
                <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#2e2c2a] text-[14.9px] tracking-[0] leading-6 whitespace-nowrap">
                  Get Started
                </span>
              </Button>
            </div>

            <div className="inline-flex items-center gap-1 relative">
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
        </div>

        {/* App screenshots/illustrations */}
        <div className="absolute w-[1009px] h-[518px] top-[726px] left-[838px]">
          <div className="absolute w-[651px] h-[496px] top-[108px] left-[-305px]">
            <div className="absolute w-[201px] h-[201px] top-[200px] left-[38px] bg-[#fc5a3252] rounded-[243.76px] rotate-[-58deg] blur-[40.63px]" />

            <div className="w-[97px] h-[97px] top-[244px] left-44 bg-[#ffffff52] rounded-[243.76px] blur-[40.63px] absolute rotate-[-58deg]" />

            <div className="w-[201px] h-[201px] top-[257px] left-[248px] bg-[#8550fc52] rounded-[243.76px] blur-[40.63px] absolute rotate-[-58deg]" />

            <div className="absolute w-[303px] h-[287px] top-[124px] left-[257px] opacity-50">
              <div className="flex flex-col w-[303px] items-start relative">
                <div className="flex flex-col w-[302.75px] h-[287.4px] items-start justify-end relative overflow-hidden">
                  <div className="relative w-[367.45px] h-[287.4px] mr-[-64.71px]">
                    <img
                      className="absolute w-[303px] h-[272px] top-0 left-0"
                      alt="Group"
                      src="/group-1.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute w-[303px] h-[255px] top-[155px] left-[330px] bg-[url(/vhfwe55x90zypyukbnf98yi5tis-png.png)] bg-cover bg-[50%_50%]" />

            <div className="absolute w-64 h-[229px] top-[180px] left-[352px] bg-white" />

            <div className="absolute w-[222px] h-[137px] top-0 left-[255px] bg-[url(/lpfknlnmbbr5za96jq7ulbdpco-png.png)] bg-cover bg-[50%_50%]" />

            <div className="absolute w-[182px] h-[75px] top-[84px] left-[469px] bg-[url(/book0ddkfwjdtj7lmh0un9mkhu-png.png)] bg-cover bg-[50%_50%]" />
          </div>

          <div className="absolute w-[646px] h-[491px] top-28 left-[668px]">
            <div className="absolute w-[632px] h-[472px] top-5 left-3.5">
              <div className="w-[97px] h-[97px] top-[264px] left-[327px] bg-[#ffffff52] rounded-[243.76px] blur-[40.63px] absolute rotate-[-58deg]" />

              <div className="w-[201px] h-[201px] top-[126px] left-[169px] bg-[#fc5a3252] rounded-[243.76px] blur-[40.63px] absolute rotate-[-58deg]" />

              <div className="w-[201px] h-[201px] top-[233px] left-[394px] bg-[#8550fc52] rounded-[243.76px] blur-[40.63px] absolute rotate-[-58deg]" />

              <div className="absolute w-[303px] h-[319px] top-[68px] left-[73px] opacity-50">
                <div className="flex flex-col w-[303px] items-start relative">
                  <div className="flex flex-col w-[302.75px] items-end justify-end overflow-hidden h-[318.88px] relative">
                    <div className="w-[377.37px] ml-[-74.63px] h-[318.88px] relative">
                      <img
                        className="absolute w-[302px] h-[304px] top-0 left-[75px]"
                        alt="Group"
                        src="/group-2.png"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute w-[303px] h-[287px] top-[99px] left-0 [background:url(..//oonivqqsqchin2l4zwyu09hwjs-png.png)_50%_50%_/_cover]">
                <div className="relative w-[266px] h-[268px] top-[18px] left-[18px] bg-white" />
              </div>

              <div className="absolute w-[303px] h-[79px] top-0 left-[69px] bg-[url(/6s9fbmox7s2f2a1qxtfjj3jfi-png.png)] bg-cover bg-[50%_50%]" />
            </div>

            <div className="flex flex-col w-[81px] items-start absolute top-0 left-0">
              <div className="flex flex-col w-[81.25px] h-[81.25px] items-center justify-center relative">
                <div className="relative w-[81.25px] h-[81.25px] bg-[url(/group-3.png)] bg-[100%_100%]" />
              </div>
            </div>
          </div>

          <div className="absolute w-[303px] h-[405px] top-28 left-[353px] [background:url(..//enefpdtxrn4mcpoayk0zv0faork-png.png)_50%_50%_/_cover]">
            <div className="relative w-[271px] h-[353px] top-[52px] left-[15px] bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
};
