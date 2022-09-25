import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Maruti Nandan Tiwari <br />A Blockchain Devloper
        </SectionTitle>
        <SectionText>
          Looking for opportunity as a smart contract devloper.
        </SectionText>
        <Button
          onClick={() =>
            (window.location =
              "https://drive.google.com/file/d/1_v4sxqnJHrolHHNP6V7-b5o7ePGjPI4O/view?usp=sharing")
          }
        >
          Download CVV
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
