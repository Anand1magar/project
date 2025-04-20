import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      name: "Sita Adhikari",
      text: "The suggestions were exactly what I needed. I quickly found the right service provider near me!",
      imagePath: "..//author-image.png",
      initials: "SA",
    },
    {
      id: 2,
      name: "Ramesh Thapa",
      text: "Such a helpful platform! Everything from search to booking was smooth and fast.",
      imagePath: "..//author-image-1.png",
      initials: "RT",
    },
    {
      id: 3,
      name: "Anita Gurung",
      text: "Honestly, it saved me a lot of time. The app made it super easy to connect with verified professionals",
      imagePath: "..//author-image-2.png",
      initials: "AG",
    },
    {
      id: 4,
      name: "Bikash Sharma",
      text: "I received multiple leads within a day. The recommendation engine is spot-on!",
      imagePath: "..//author-image-3.png",
      initials: "BS",
    },
    {
      id: 5,
      name: "Nisha K.C.",
      text: "Love how I can find and book services without making a single call. Super efficient!",
      imagePath: "..//author-image-4.png",
      initials: "NK",
    },
    {
      id: 6,
      name: "Dipendra Rai",
      text: "Tokma just gets what you're looking for. It felt like the app truly understood my needs.",
      imagePath: "..//author-image-5.png",
      initials: "DR",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-20 py-[100px] px-6 md:px-[100px] relative w-full bg-white">
      <div className="flex flex-col max-w-[1200px] items-center gap-[70px] relative w-full">
        {/* Section header */}
        <div className="flex flex-col items-center gap-2.5 relative w-full">
          <h2 className="relative w-full [font-family:'Inter',Helvetica] font-semibold text-[#1d2939] text-4xl text-center tracking-[-0.72px] leading-[44px]">
            Customers Love Tokma
          </h2>
          <p className="relative w-full [font-family:'Inter',Helvetica] font-normal text-[#393939] text-lg text-center tracking-[-0.30px] leading-[30.6px]">
            Read inspiring testimonials from users who using our platform.
          </p>
        </div>

        {/* Decorative background elements */}
        <div className="relative w-full">
          <div className="absolute w-[596px] h-[411px] -top-1 left-1/4 right-1/4 mx-auto">
            <div className="w-[247px] h-[247px] top-[47px] left-[47px] bg-[#fc5a3252] rounded-[300px] blur-[50px] opacity-50 absolute rotate-[-58deg]" />
            <div className="w-[247px] h-[247px] top-[117px] left-[303px] bg-[#8550fc52] rounded-[300px] blur-[50px] opacity-50 absolute rotate-[-58deg]" />
          </div>

          {/* Testimonial cards grid */}
          <div className="flex flex-wrap items-center justify-center gap-[14px] relative w-full">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="max-w-[384px] w-full border border-solid border-[#0000000d] rounded-2xl bg-white"
              >
                <CardContent className="px-6 py-[23px]">
                  <div className="flex items-start gap-[13px]">
                    <Avatar className="w-[47px] h-[47px]">
                      <AvatarImage
                        src={testimonial.imagePath}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-2">
                      <h3 className="[font-family:'Inter',Helvetica] font-medium text-black text-lg tracking-[-0.30px] leading-[30.6px]">
                        {testimonial.name}
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-base tracking-[-0.30px] leading-[27.2px]">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust badge */}
        <div className="relative w-[280px] h-[50px] bg-[#4361ee] rounded-[100px] overflow-hidden shadow-[0px_20px_24px_-4px_#10182814,0px_8px_8px_-4px_#10182808]">
          <div className="flex items-center h-full px-4">
            <div className="flex -space-x-1">
              <Avatar className="w-[34px] h-[34px] border-2 border-solid border-white">
                <AvatarImage
                  src="/z9qf3dnysbw0t70hu1s64en34o-jpg-1.png"
                  alt="User"
                />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <Avatar className="w-[34px] h-[34px] border-2 border-solid border-white">
                <AvatarImage
                  src="/y2qgmvzz3dwkqtfsa3p9kxqsey-png-1.png"
                  alt="User"
                />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <Avatar className="w-[34px] h-[34px] border-2 border-solid border-white">
                <AvatarImage
                  src="/cpqqqqnssihmc7iy7craf6rj0-png-1.png"
                  alt="User"
                />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
            </div>
            <span className="ml-3 [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[-0.30px] leading-[23.8px]">
              Trusted by 17,000+ users
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
