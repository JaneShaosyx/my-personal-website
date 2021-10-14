import React from 'react';

import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal <br />
        Website
      </SectionTitle>
      <SectionText >
        Hi, I am Yuxin Shao, <br />
        a software developer.
      </SectionText>
      {/* <Button onClick={() => window.location = "https://google.com"}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;