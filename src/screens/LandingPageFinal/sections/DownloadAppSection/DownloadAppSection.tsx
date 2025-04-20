import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const DownloadAppSection = (): JSX.Element => {
  return (
    <Card className="flex items-end justify-center gap-[142px] pt-[103px] pb-0 px-[120px] relative w-full bg-gray-900 rounded-xl overflow-hidden">
      {/* Background light effects */}
      <div className="absolute w-[667px] h-[506px] top-[-88px] left-[787px]">
        <div className="absolute w-12 h-[584px] top-[-39px] left-[163px] rounded-[486px] rotate-[35.05deg] blur-[30px] [background:linear-gradient(180deg,rgba(255,255,255,0.64)_0%,rgba(255,255,255,0)_80%)]" />
        <div className="absolute w-[31px] h-[441px] top-[-45px] left-[485px] rounded-[357.67px] rotate-[47.27deg] blur-lg [background:linear-gradient(180deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0)_100%)]" />
      </div>

      <CardContent className="flex flex-wrap max-w-[950px] items-center gap-[24px_24px] relative flex-1 grow p-0">
        <div className="flex flex-col min-w-[200px] items-start gap-6 pt-10 pb-0 px-0 relative flex-1 grow">
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full">
            <h3 className="relative self-stretch mt-[-1.00px] font-semibold text-white text-lg tracking-[0] leading-[21.6px]">
              Download from App store
            </h3>

            <div className="flex flex-wrap items-center gap-[21px_21px] relative self-stretch w-full">
              <div className="relative w-[168px] h-14 bg-[url(/link---gq3emk5shl91tuzqh4wnmqtdem-png.png)] bg-cover bg-[50%_50%]" />
              <div className="relative w-[168px] h-14 bg-[url(/link---ibvcwru5gjp6qanbiaugoxwue-png.png)] bg-cover bg-[50%_50%]" />
            </div>
          </div>

          <div className="flex max-w-[374px] items-center gap-3 relative w-full">
            <Separator className="flex-1 bg-white" />
            <span className="relative w-fit mt-[-1.00px] font-semibold text-white text-lg text-center tracking-[0] leading-[21.6px] whitespace-nowrap">
              0r
            </span>
            <Separator className="flex-1 bg-white" />
          </div>

          <div className="flex flex-wrap items-center gap-[28px_28px] relative self-stretch w-full">
            <div className="inline-flex items-center gap-2.5 p-1.5 relative bg-white">
              <img
                className="relative w-[150px] h-[150px] object-cover"
                alt="QR Code"
                src="/untitled-1-1.png"
              />
            </div>

            <p className="relative flex-1 font-semibold text-white text-lg tracking-[0] leading-[21.6px]">
              Scan QR Code to <br />
              Download
            </p>
          </div>
        </div>

        <img
          className="relative w-[429px] h-[468px]"
          alt="App mockup"
          src="/downlaod-section-mockup-.png"
        />
      </CardContent>
    </Card>
  );
};
