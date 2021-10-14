import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
        <DiCssdeck size="3rem" /> <Span>Yuxin Shao</Span>
      </a>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>
            About
          </NavLink>
        </Link>
      </li> <li>
        <Link href="#tech">
          <NavLink>
            Technologies
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>
            Projects
          </NavLink>
        </Link>
      </li>
      <li>
        <a href="./statics/resume.pdf">
          <NavLink>
            CV
          </NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.github.com/JaneShaosyx">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/yuxinshao/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/janeshao0106/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container >
);

export default Header;
