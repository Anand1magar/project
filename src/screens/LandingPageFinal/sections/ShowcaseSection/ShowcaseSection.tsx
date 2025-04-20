import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const ShowcaseSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What is Tokma?",
      answer:
        "Tokma is a local service app that connects you with trusted ride, guide, companion, and security services in your city.",
      defaultOpen: true,
    },
    {
      question: "Can I choose the type of service I want?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Is Tokma available in all cities?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Do I need an account to use Tokma?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "How do I know if a provider is verified?",
      answer: "",
      defaultOpen: false,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-20 py-[100px] px-[120px] relative self-stretch w-full bg-white">
      <div className="flex flex-col max-w-[1200px] items-center gap-[70px] relative w-full">
        <header className="flex flex-col items-center gap-2.5 relative self-stretch w-full">
          <h2 className="relative self-stretch mt-[-1.00px] font-inter font-semibold text-[#1d2939] text-4xl text-center tracking-[-0.72px] leading-[44px]">
            Frequently Asked Questions
          </h2>

          <p className="relative self-stretch font-inter font-normal text-[#667084] text-lg text-center leading-[23.4px]">
            Got questions? We&apos;ve got answers to help you get the most out
            of Tokma.
          </p>
        </header>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="flex flex-col max-w-[750px] items-start gap-3 relative w-full"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`item-${index}`}
              value={`item-${index}`}
              className="w-full bg-white rounded-[14px] border border-solid border-[#16181a14] overflow-hidden"
            >
              <AccordionTrigger className="px-[18px] py-3.5 font-inter font-normal text-gray-800 text-lg leading-[21.6px] hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-[18px] pb-[31px] font-inter font-normal text-gray-600 text-base leading-[22.6px]">
                {item.answer || "No answer provided yet."}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="relative w-[280.2px] h-[50px] bg-[#4361ee] rounded-[100px] overflow-hidden shadow-[0px_20px_24px_-4px_#10182814,0px_8px_8px_-4px_#10182808] border border-solid border-[#0000000d]">
          <div className="flex items-center h-full px-4">
            <div className="flex -space-x-1">
              <div className="relative w-[34px] h-[34px] rounded-[100px] shadow-[0px_20px_24px_-4px_#10182814,0px_8px_8px_-4px_#10182808] overflow-hidden">
                <div className="h-[34px] rounded-[100px] bg-[url(/z9qf3dnysbw0t70hu1s64en34o-jpg-2.png)] bg-cover bg-[50%_50%] border-2 border-solid border-white" />
              </div>

              <div className="relative w-[34px] h-[34px] rounded-[100px] shadow-[0px_20px_24px_-4px_#10182814,0px_8px_8px_-4px_#10182808] overflow-hidden">
                <div className="h-[34px] rounded-[100px] bg-[url(/y2qgmvzz3dwkqtfsa3p9kxqsey-png-2.png)] bg-cover bg-[50%_50%] border-2 border-solid border-white" />
              </div>

              <div className="relative w-[33px] h-[34px] rounded-[100px] shadow-[0px_20px_24px_-4px_#10182814,0px_8px_8px_-4px_#10182808] overflow-hidden">
                <div className="h-[34px] rounded-[100px] bg-[url(/cpqqqqnssihmc7iy7craf6rj0-png-2.png)] bg-cover bg-[50%_50%] border-2 border-solid border-white" />
              </div>
            </div>

            <span className="ml-3 font-inter font-medium text-white text-sm tracking-[-0.30px] leading-[23.8px] whitespace-nowrap">
              Trusted by 17,000+ users
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
