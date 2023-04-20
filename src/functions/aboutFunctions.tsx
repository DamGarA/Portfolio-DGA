import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import aboutEn from "@/public/locales/en/about";
import aboutEs from "@/public/locales/es/about";

const renderAcordion = (
  title: string,
  text: string,
  lang: string
): JSX.Element => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton
          bg="#400D51"
          border="0.1vw solid #D800A6"
          borderRadius="4px"
        >
          <Box
            as="span"
            flex="1"
            textAlign="left"
            color="#FF7777"
            fontWeight="700"
            fontSize="3.5vh"
          >
            {lang === "es" ? aboutEs[title] : aboutEn[title]}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} color="white">
        {lang === "es" ? aboutEs[text] : aboutEn[text]}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default renderAcordion;
