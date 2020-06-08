import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

import Link from '~/components/Link';

import {
  Container,
  Content,
  NavigationContainer,
  Navigation,
  Icons,
} from './styles';

const FooterComponent = () => (
  <Container>
    <Content>
      <img src="/static/tests/profile.png" alt=" My Photo" />

      <p>
        Este portifólio não possui tamplates pagos ou prontos, tudo foi
        desenvolvido a mão. O repositório do website não será divulgada como
        está, irei disponibilizar uma versão para comercialização em breve!
      </p>
    </Content>
    <NavigationContainer>
  <img src="/static/tests/hijazi.png" alt="Gabriel Hijazi" />
  <p>
      Credits: Gabriel Hijazi
      Site: https://devhijazi.tk/
      </p>
      <strong>Credits: Gabriel Hijazi</strong>
      <strong>©2020</strong>
      <Navigation>
        <Link href="/404">Termos de Uso</Link>
      </Navigation>
      <Icons>
        <a
          href="https://www.instagram.com/hijazi_gabriel/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiInstagram color="#fff" size="2.5rem" />
        </a>
        <a
          href="https://www.instagram.com/hijazi_gabriel/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub color="#fff" size="2.5rem" />
        </a>
      </Icons>
    </NavigationContainer>
  </Container>
);

export default FooterComponent;
