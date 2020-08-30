import React from 'react';
import { ControlBar, PlayToggle } from 'video-react';

// import Layout from '~/layouts/Default';

// import Slider from '~/components/Slider';

// import ContactPage from '~/pages/contact';
// import ProjectsSection from '~/pages/projects';

import { HomeContainer, Content, Section, Player } from '~/styles/pages/gift';

const GiftPage = () => {
  return (
    // <Layout>
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
         <title> Liana </title>
            <h1>
              Liana
            </h1>
            <p className="subtitle">
              <span className="beforeSpan">
                👑 Seja Bem Vinda 👑{' '}
              </span>
            </p>
          </section>
        </Content>

        <Section id="aboutme">
          <ol>
            <li>
              <p>
               Roi <b>Liana</b> ne? Seja Bem Vinda eu sei que somos só amigos{' '}
               mais eu queria fazer algo especial então eu to fazendo isso
               o banner da tela de carregamento era so pra vc ver pois eu tirei
               mais o seu presente ta no meu site é secreto pois ngm sabe
               eu ia mostrar no nosso <b>aniversario de 4 meses de amizade</b>{' '}
                mais o coração falou mais forte.  
               Eu sei que to aqui com vc por tudo, a gente é amigo eu sei
               so que eu quero te conhecer mais sem eu ficar pensando ela é ex do meu amigo
               eu não vou desistir pois eu gosto de você esse presente so você sabe dele
               eu quero que você esqueça ele você tem os meus braços pra chorar,
               você tem meu carinho, eu sou romantico mesmo com amizade ( so de menina )
               ele não merece você tem varias pessoas que vai atras de você ( mais não oque vc sente )
               a maioria so quer curtição quer falar eu tenho namorada e vocês não mais ninguem sabe
               que você ta em casa esperando ele pra ter um abraço gostoso ter aquele dia lindo
               eu sei que somos amigo mais você tem os meus braços pra te guardar e não fique dando encima
               dos cara la pois a Soraka ela so quer saber que o Batman ta sozinho vai pra cima e ela sabe
               que vc gosta dele então a Ryuk e as meninas vão fazer vc ficar com ciumes... Te amo 
               ( eu sei que não vai falar o mesmo :) )
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
export default GiftPage;
