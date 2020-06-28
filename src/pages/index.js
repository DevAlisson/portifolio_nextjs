import React from 'react';

import Layout from '~/layouts/Default';

import Slider from '~/components/Slider';

import ContactPage from '~/pages/contact';
import ProjectsSection from '~/pages/projects';

import { HomeContainer, Content, Section } from '~/styles/pages/index';

const HomePage = () => (
  <>
    <Layout>
      <HomeContainer>
        <Content>
          <Slider
            images={[
              '/static/images/slider_01.jpg',
              '/static/images/slider_02.jpeg',
              '/static/images/slider_03.jpg',
            ]}
          />
          <div>
            <img src="/static/profile/perfil.png" alt="logo" width="100" height="auto"/>
           <title> AllissonGOD </title>
            <h1>
              Allisson<span>GOD</span>
            </h1>
            <p>
              Desenvolvedor <span>JavaScript, Java, Python!</span>
            </p>
          </div>
        </Content>
        <Section id="aboutme">
          <ol>
            <li>
              <h1>
                Sobre <span> Mim</span>
              </h1>
              <p>
                Olá, meu nome é <b>AllissonG</b>, estudante de{' '}
                <b>JavaScript, Python, Java </b>na{' '}
                <b>Discord e Minecraft</b>. Aprendi a
                maioria das tecnologias de desenvolvimento em casa por puro
                interesse e vontade de me tornar programador de sucesso. Comecei
                com desenvolvimento de bots para Discord mas sempre tive
                interesse no <b>Web e Software</b>. Atualmente Support do
                <b> KaelBot</b> onde é um bot desenvolvido em eris e futuramente
                vamos está fazendo varias atualizações.
              </p>
            </li>
          </ol>
        </Section>

        {/* Projects SectionPage Component */}
        <ProjectsSection />

        {/* Contact SectionPage Component */}
        <ContactPage />
      </HomeContainer>
    </Layout>
  </>
);

export default HomePage;
