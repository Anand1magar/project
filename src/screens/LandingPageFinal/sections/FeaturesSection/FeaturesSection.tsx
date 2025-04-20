import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Feature data for mapping
const features = [
  {
    title: "Safe & Trusted Rides at Your Fingertips",
    description:
      "Book rides from verified providers with real-time tracking, ratings, and transparent pricing.\nSay goodbye to the hassle—ride smarter, safer, and faster with Tokma.",
    visual: (
      <div className="relative w-full h-[409px]">
        <div className="relative h-[409px]">
          <div className="absolute w-[325px] h-[300px] top-[109px] left-[163px] bg-gray-300 rounded-[20px_20px_0px_0px]" />
          <div className="absolute w-[325px] h-[409px] top-0 left-0 bg-gray-500 rounded-[20px_20px_0px_0px]" />
        </div>
      </div>
    ),
  },
  {
    title: "Location-Based Service Matching",
    description:
      "Get matched with nearby providers instantly based on your location and service needs—\nmaking it fast, easy, and efficient.",
    visual: (
      <img
        className="w-full h-auto"
        alt="Location-based service matching illustration"
        src="/x2txwq9bfax87lx2nuoqjhb8wo-png.png"
      />
    ),
  },
];

const bottomFeatures = [
  {
    title: "On-Demand Personal Security",
    description:
      "Feel safe with Tokma's reliable security services.\nFrom event guards to personal protection—support is just a tap away.",
    visual: (
      <div className="flex flex-col w-full items-start gap-2.5 relative">
        <div className="relative self-stretch w-full h-[232px] [background:url(..//yklfbnp5yycfkzo0ijg7swefh34-png.png)_50%_50%_/_cover]">
          <div className="absolute w-[81px] h-[17px] top-[118px] left-[143px] bg-gray-400 rounded-[5px]" />
          <div className="absolute w-[111px] h-[17px] top-[118px] left-[295px] bg-gray-400 rounded-[5px]" />
          <div className="absolute w-[26px] h-[13px] top-[141px] left-36 bg-gray-400 rounded-[5px]" />
          <div className="absolute w-[35px] h-[13px] top-[141px] left-[296px] bg-gray-400 rounded-[5px]" />
          <div className="absolute w-[26px] h-[13px] top-[141px] left-[238px] bg-gray-100 rounded-[5px]" />
          <div className="absolute w-8 h-[13px] top-[141px] left-[390px] bg-gray-100 rounded-[5px]" />
          <div className="absolute w-[13px] h-[15px] top-[95px] left-[147px] bg-gray-400 rounded-[5px]" />
          <div className="absolute w-4 h-[15px] top-[95px] left-[296px] bg-gray-400 rounded-[5px]" />
        </div>
      </div>
    ),
  },
  {
    title: "Companion Support, Anytime",
    description:
      "Whether it's a caregiver, a shopping buddy, or just someone to assist— Tokma connects you to verified companions who make daily life easier and friendlier.",
    visual: (
      <div className="flex flex-col w-full items-start gap-2.5 relative">
        <div className="flex h-[76px] items-center justify-center p-2.5 relative self-stretch w-full">
          <img
            className="relative max-w-full w-[540px] max-h-[76px] h-[62px]"
            alt="Section list"
            src="/section---list.svg"
          />
        </div>
        <img
          className="relative self-stretch w-full h-[81px]"
          alt="Section mask group"
          src="/section-mask-group.svg"
        />
      </div>
    ),
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="flex items-start justify-center px-[24px] py-[129px] w-full bg-white" >
      <div className="flex flex-col max-w-[1120px] items-center gap-[57px] w-full">
        {/* Section Header */}
        <header className="flex flex-col max-w-[760px] items-start gap-[19px] w-full">
          <h2 className="font-semibold text-[#1d2939] text-4xl text-center tracking-[-0.72px] leading-[44px] w-full">
            Feel the best experience with our features
          </h2>
          <p className="font-normal text-[#667085] text-lg text-center leading-[23.4px] w-full">
            Packed with smart tools to help you book rides, find guides, connect
            with helpers, and stay safe—no matter where life takes you.
          </p>
        </header>

        {/* Features Grid */}
        <div className="flex flex-col items-start gap-[31px] w-full">
          {/* Top Row - Two Cards */}
          <div className="flex flex-wrap items-start gap-[20px] w-full">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="flex flex-col min-w-[350px] items-center gap-[60px] pt-20 pb-0 px-0 flex-1 bg-gray-100 rounded-3xl overflow-hidden"
              >
                <CardContent className="flex flex-col items-start justify-center gap-[15.39px] px-[60px] py-0 w-full">
                  <div className="flex flex-col items-start w-full">
                    <h3 className="font-semibold text-[#1d2939] text-3xl leading-[42px]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="font-normal text-[#667085] text-lg leading-[23.4px] whitespace-pre-line">
                    {feature.description}
                  </p>
                </CardContent>
                {feature.visual}
              </Card>
            ))}
          </div>

          {/* Middle Row - Single Card */}
          <Card className="flex flex-wrap items-end gap-[60px] px-[60px] py-0 w-full bg-gray-100 rounded-3xl">
            <CardContent className="flex flex-col min-w-[220px] h-[464px] items-center justify-center gap-[15.59px] flex-1">
              <div className="flex flex-col items-start w-full">
                <h3 className="font-semibold text-[#1d2939] text-3xl leading-[42px]">
                  Find Local Guides Instantly
                </h3>
              </div>
              <p className="font-normal text-[#667085] text-lg leading-[23.4px]">
                Need help navigating a new place or city?
                <br />
                Hire trusted local guides who speak your language and understand
                your needs.
              </p>
            </CardContent>
            <img
              className="relative w-[449px] h-[415px]"
              alt="Find local guides illustration"
              src="/er78yswtdxksmsuua6skpiiojxk-png-1.png"
            />
          </Card>

          {/* Bottom Row - Two Cards */}
          <div className="flex flex-wrap items-center gap-[20px] w-full">
            {bottomFeatures.map((feature, index) => (
              <Card
                key={index}
                className="flex flex-col min-w-[380px] h-[523px] items-center justify-between pt-20 pb-0 px-0 flex-1 bg-gray-100 rounded-3xl overflow-hidden"
              >
                <CardContent className="flex flex-col items-start justify-center gap-[15.39px] px-[60px] py-0 w-full">
                  <div className="flex flex-col items-start w-full">
                    <h3 className="font-semibold text-[#1d2939] text-3xl leading-[42px]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="font-normal text-[#667085] text-lg leading-[23.4px] whitespace-pre-line">
                    {feature.description}
                  </p>
                </CardContent>
                {feature.visual}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
