import { PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

// Feature data for mapping
const features = [
  {
    id: 1,
    title: "Find trusted local services in minutes",
    description:
      "Tokma connects you with nearby, verified service providers—whether you need a ride, a helping hand, or a personal guide.\nEnjoy convenience, trust, and speed all in one app.",
    imageType: "service-cards",
  },
  {
    id: 2,
    title: "Stay updated in real-time",
    description:
      "Get instant alerts for bookings, updates from your service providers, and changes to availability—so you're always in the loop. Never miss an update again.",
    imageType: "notifications",
  },
  {
    id: 3,
    title: "Used and trusted across Nepal",
    description:
      "With thousands of happy users across the country, Tokma is built for your lifestyle. Experience hassle-free bookings, transparent pricing, and 24/7 support wherever you go",
    imageType: "map-view",
  },
];

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-20  relative w-full bg-white" style={{padding: "80px 24px"}}>
      <h2 className="text-4xl font-semibold text-[#1d2939] text-center tracking-[-0.72px] leading-[44px] font-['Inter',Helvetica]">
        Discover the top reasons why Tokma is your go-to service partner
      </h2>

      <div className="flex flex-col max-w-[1200px] items-center gap-20 w-full">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-wrap items-center gap-[60px] w-full ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
          >
            {/* Feature Image Area */}
            {feature.imageType === "service-cards" && (
              <Card className="flex w-[570px] h-[399.27px] items-center justify-center relative bg-gray-50 rounded-2xl overflow-hidden">
                <div className="flex w-[174.36px] h-[399.27px] items-center justify-center relative ml-[-28.86px]">
                  <div className="relative self-stretch w-[174.36px] bg-[url(/nvpy9unczsm7gny12jak3svicg-png.png)] bg-cover bg-[50%_50%]" />
                </div>

                <div className="flex flex-col w-[279px] items-start gap-1.5 relative">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="flex flex-col items-start gap-2.5 p-4 relative self-stretch w-full bg-white rounded-[22px] overflow-hidden"
                    >
                      <div className="relative self-stretch w-full h-24 bg-white rounded-[22px] border border-solid">
                        <div className="absolute w-[59px] h-[59px] top-[18px] left-[19px] bg-gray-300 rounded-xl" />
                        <div className="absolute w-[99px] h-[15px] top-[15px] left-[101px] bg-gray-400 rounded-[19px]" />
                        <div className="absolute w-[49px] h-[15px] top-10 left-[101px] bg-gray-300 rounded-[19px] opacity-50" />
                        <div className="absolute w-[99px] h-[15px] top-[65px] left-[101px] bg-gray-300 rounded-[19px] opacity-50" />
                        <div className="absolute w-[49px] h-[15px] top-10 left-40 bg-gray-300 rounded-[19px] opacity-50" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex w-[174.36px] h-[399.27px] items-center justify-center relative">
                  <div className="relative self-stretch w-[174.36px] bg-[url(/biea1xmqo34dmkjsjgleui94eks-png.png)] bg-cover bg-[50%_50%]" />
                </div>

                <div className="absolute w-[646px] h-[157px] top-px left-0 rotate-180 [background:linear-gradient(180deg,rgba(248,248,248,0.1)_16%,rgba(248,248,248,1)_100%)]" />
                <div className="absolute w-[570px] h-[157px] top-[243px] left-0 [background:linear-gradient(180deg,rgba(248,248,248,0.1)_16%,rgba(248,248,248,1)_100%)]" />
              </Card>
            )}

            {feature.imageType === "notifications" && (
              <Card className="w-[645.83px] h-[399.27px] bg-gray-50 rounded-2xl overflow-hidden">
                <div className="relative w-[523px] h-[330px] top-[58px] left-[78px]">
                  <div className="absolute w-[372px] h-[239px] top-[53px] left-0 bg-white rounded-xl overflow-hidden">
                    <div className="absolute w-[163px] h-5 top-[17px] left-[17px] bg-gray-500 rounded-[7px]" />

                    <div className="flex flex-col w-[205px] items-start gap-[17px] absolute top-[76px] left-16">
                      <div className="flex items-center gap-1 relative self-stretch w-full">
                        <div className="relative w-[90px] h-[13px] bg-gray-500 rounded-[7px]" />
                        <div className="relative w-[111px] h-[13px] bg-gray-500 rounded-[7px]" />
                      </div>
                      <div className="relative w-[145px] h-[13px] bg-gray-300 rounded-[7px]" />
                    </div>

                    <div className="flex flex-col w-[205px] items-start gap-[17px] absolute top-[152px] left-16">
                      <div className="flex items-center gap-1 relative self-stretch w-full">
                        <div className="relative w-[90px] h-[13px] bg-gray-500 rounded-[7px]" />
                        <div className="relative w-[111px] h-[13px] bg-gray-500 rounded-[7px]" />
                      </div>
                      <div className="relative w-[145px] h-[13px] bg-gray-300 rounded-[7px]" />
                    </div>

                    <div className="absolute w-[38px] h-[41px] top-[70px] left-[17px] bg-gray-300 rounded-[7px]" />
                    <div className="absolute w-[38px] h-[41px] top-[146px] left-[17px] bg-gray-300 rounded-[7px]" />
                  </div>

                  <div className="absolute w-[216px] h-[141px] top-0 left-72 bg-[url(/mecoq5mo31w5oc4i7ret9vzrfo8-png.png)] bg-cover bg-[50%_50%]" />
                  <div className="absolute w-[216px] h-[141px] top-[189px] left-[307px] bg-[url(/ffaal4ajobingxtirjuzys4djdq-png.png)] bg-cover bg-[50%_50%]" />
                </div>
              </Card>
            )}

            {feature.imageType === "map-view" && (
              <Card className="w-[645.83px] h-[399.27px] bg-gray-50 rounded-2xl overflow-hidden">
                <div className="relative w-[575px] h-[355px] top-[22px] left-9">
                  <div className="absolute w-[575px] h-[355px] top-0 left-0 [background:url(..//j6sbo3mbawqpdd8zc58wmcycovg-png.png)_50%_50%_/_cover]">
                    <div className="flex flex-col w-[265px] items-start gap-5 px-[13px] py-[17px] relative top-[34px] bg-white rounded-xl overflow-hidden shadow-[0px_4px_4px_#00000008,0px_8px_12px_6px_#0000001a]">
                      <div className="relative w-[167px] h-5 bg-gray-300 rounded-xl" />
                      <div className="relative self-stretch w-full h-5 bg-gray-300 rounded-xl" />
                      <div className="relative w-[67px] h-5 bg-gray-300 rounded-xl" />
                      <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                        <div className="relative self-stretch w-full h-14 bg-gray-300 rounded-xl" />
                        <div className="relative self-stretch w-full h-14 bg-gray-300 rounded-xl" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[217px] h-[157px] top-[161px] left-[283px] bg-[url(/veozuogob4e8hrgon1lrm5fyauu-png.png)] bg-cover bg-[50%_50%]" />
                </div>
              </Card>
            )}

            {/* Feature Text Content */}
            <div className="flex flex-col min-w-[250px] items-start gap-[49px] flex-1">
              <div className="flex flex-col items-start gap-7 w-full">
                <h3 className="text-3xl font-semibold text-[#1d2939] tracking-[0] leading-[42px] font-['Inter',Helvetica]">
                  {feature.title}
                </h3>
                <p className="text-base font-normal text-[#393939] tracking-[-0.30px] leading-[27.2px] font-['Inter',Helvetica]">
                  {feature.description}
                </p>
              </div>

              <Button className="pl-6 pr-[16px] py-2.5 bg-[#e01836] rounded-lg text-white border border-solid border-red-700 shadow-[inset_0px_1px_0px_1px_#ffffff1a,0px_1px_3px_#0908070d,0px_1px_2px_#09080708]">
                <span className="font-medium text-[15.4px] leading-6 font-['Inter',Helvetica]">
                  Download Now
                </span>
                <PhoneIcon className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
