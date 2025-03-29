
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItem[];
}

const Faq = ({ items }: FaqProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
          <AccordionTrigger className="text-left font-medium py-4">{item.question}</AccordionTrigger>
          <AccordionContent className="text-gray-600 pb-4">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Faq;
