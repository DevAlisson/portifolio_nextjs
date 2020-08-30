import React from 'react';
import { ControlBar, PlayToggle } from 'video-react';

import Layout from '~/layouts/Default';

// import Slider from '~/components/Slider';

// import ContactPage from '~/pages/contact';
// import ProjectsSection from '~/pages/projects';

import { HomeContainer, Content, Section, Player } from '~/styles/pages/index';

const GiftPage = () => {
  return (
    <Layout>
      <HomeContainer>
        <Content>
          <Player
            autoPlay
            muted="true"
            loop="true"
            controls="false"
            src="/static/videos/video_02.mp4"
          >
            <ControlBar autoHide="false" disableDefaultControls="true">
              <PlayToggle />
            </ControlBar>
          </Player>

          <section>
            <h1>
              Gabriel <span>HijaZi</span>
            </h1>
            {/* <p className="subtitle">
              <span className="beforeSpan">
                JavaScript / React / React Native{' '}
              </span>
            </p> */}
          </section>
        </Content>

        <Section id="aboutme">
          <ol>
            <li>
              <h1>
                Sobre <span> Mim</span>
              </h1>
              <p>
               Roi <b>Liana</b> ne? Seja Bem Vinda eu sei que somos só amigos{' '}
               mais eu queria fazer algo especial então eu to fazendo isso
               o banner da tela de carregamento era so pra vc ver pois eu tirei
               mais o seu presente ta no meu site é secreto pois ngm sabe
               eu ia mostrar no nosso <b>aniversario de 4 meses de amizade</b>{' '}
                mais o coração falou mais forte
              </p>
            </li>
          </ol>
        </Section>

        {/* Projects SectionPage Component */}
       // <ProjectsSection />

        {/* Contact SectionPage Component */}
       // <ContactPage />
      </HomeContainer>
    </Layout>
  );
};
export default GiftPage;
