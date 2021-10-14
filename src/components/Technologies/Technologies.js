import React from 'react';
import { DiDatabase, DiReact, DiGit } from 'react-icons/di';
import { AiFillDatabase } from 'react-icons/ai';
import { FaDocker } from 'react-icons/fa';
import { BiTestTube } from 'react-icons/bi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a range of technologies. </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Vue.js, JQuery...
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BiTestTube size="3rem" />
        <ListContainer>
          <ListTitle>Testing</ListTitle>
          <ListParagraph>
            Experience with <br />
            libraries like JUnit, Chai
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiFillDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Data processing</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python and R
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaDocker size="3rem" />
        <ListContainer>
          <ListTitle>Virtualization</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Virtualbox, Docker
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="3rem" />
        <ListContainer>
          <ListTitle>Version Control</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <br />
    <SectionDivider />
  </Section>
);

export default Technologies;
