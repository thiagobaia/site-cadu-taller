import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

export const AccordionTaller = ({ title, resp }) => {
  return (
    <Accordion collapseAll>
      <AccordionPanel>
        <AccordionTitle className="border border-gray-400 rounded-md">
          <p className="px-2.5 w-full text-[18px] md:text-2xl">{title}</p>
        </AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 text-[18px]">{resp}</p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
};

export default AccordionTaller;
