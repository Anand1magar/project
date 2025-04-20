import { PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Define the step data for mapping
const steps = [
  {
    icon: "/group-4.png",
    title: "Verify Your Phone",
    description: "Secure your account quickly with just your phone number.",
  },
  {
    icon: "/group-5.png",
    title: "Tell Us About You",
    description: "Add your info to personalize your experience.",
  },
  {
    icon: "/group-6.png",
    title: "Explore Services Instantly",
    description:
      "Discover packages tailored to your needs—or continue as a guest and browse freely.",
  },
];

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-20 py-[100px] px-[100px] relative self-stretch w-full bg-white">
      <header className="flex flex-col max-w-[760px] items-start gap-[19px] relative w-full">
        <h2 className="relative self-stretch mt-[-1.00px] font-semibold text-[#1d2939] text-4xl text-center tracking-[-0.72px] leading-[44px]">
          How Tokma Works
        </h2>
        <p className="relative self-stretch font-normal text-[#667085] text-lg text-center tracking-[0] leading-[23.4px]">
          Getting started is simple—download, connect, and take control of your
          app with just a few taps
        </p>
      </header>

      <div className="flex flex-wrap max-w-[1120px] items-center gap-16 relative w-full">
        <Card className="relative w-[528px] h-[703px] bg-gray-100 rounded-3xl overflow-hidden border-0">
          <CardContent className="p-0">
            <div className="flex w-[400px] h-[772px] items-center justify-center relative top-[120px] left-16 rotate-180">
              <img
                className="relative w-[400px] h-[404.5px] -rotate-180"
                alt="Phone mockup"
                src="/er78yswtdxksmsuua6skpiiojxk-png-1.png"
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex-col min-w-[300px] gap-[39px] flex items-start relative flex-1 grow">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-5 relative self-stretch w-full"
            >
              <div className="inline-flex flex-col items-start p-3 relative flex-[0_0_auto] bg-[#eaecf0] rounded-[31px]">
                <div className="w-6 relative h-6">
                  <img
                    className="absolute w-auto h-auto top-0.5 left-0.5"
                    alt={`Step ${index + 1} icon`}
                    src={step.icon}
                  />
                </div>
              </div>

              <h3 className="font-semibold text-[#1d2939] text-3xl tracking-[0] leading-[42px] relative self-stretch">
                {step.title}
              </h3>

              <p className="relative self-stretch font-normal text-[#667085] text-lg tracking-[0] leading-[23.4px]">
                {step.description}
              </p>
            </div>
          ))}

          <Button className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#e01836] text-white rounded-lg shadow-[inset_0px_1px_0px_1px_#ffffff1a,0px_1px_3px_#0908070d,0px_1px_2px_#09080708] border border-solid border-red-700">
            <span className="font-medium text-[15.4px] leading-6">
              Download Now
            </span>
            <PhoneIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
