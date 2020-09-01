import React from 'react';
import { ControlBar, PlayToggle } from 'video-react';

// import Layout from '~/layouts/Default';

// import Slider from '~/components/Slider';

// import ContactPage from '~/pages/contact';
// import ProjectsSection from '~/pages/projects';

import { HomeContainer, Content, Section, Player } from '~/styles/pages/gift';

const PaiPage = () => {
  return (
    // <Layout>
      <HomeContainer>
        <Content>
          <Player
            autoPlay
            muted="false"
            loop="true"
            controls="false"
            src="/static/videos/video_02.mp4"
          >
            <ControlBar autoHide="false" disableDefaultControls="true">
              <PlayToggle />
            </ControlBar>
          </Player>

          <section>
         <title> Adilson </title>
            <h1>
              Adilson / <span> Pai </span>
            </h1>
            <p className="subtitle">
              <span className="beforeSpan">
          👑 Seja Bem Vindo Pai  👑{' '}
              </span>
            </p>
          </section>
        </Content>

        <Section id="aboutme">
          <ol>
            <li>
              <p>
               Olá Pai, Seja Bem Vindo a sua Homenagem, <b> Feliz Aniversario </b>{" "}
               Tomara que goste do site eu fiquei um tempo fazendo é facil e dificil
               se vc olhar encima tem um Trailer de um Filme que eu coloquei mais eu consegui
               o seu presente é esse site não vou colocar muita coisa pq pode ficar muito grande
               ai não tem como eu fazer muita coisa aqui :), Feliz Aniversario <3
              </p>
            </li>
          </ol>
        </Section>

        {/* Projects SectionPage Component
        <ProjectsSection />* /}
        {/* Contact SectionPage Component 
       <ContactPage /> */}
      </HomeContainer>
    // </Layout>
  );
};
export default PaiPage;
