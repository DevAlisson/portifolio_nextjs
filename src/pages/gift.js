import React from 'react';
import { ControlBar, PlayToggle } from 'video-react';

// import Layout from '~/layouts/Default';

// import Slider from '~/components/Slider';

// import ContactPage from '~/pages/contact';
// import ProjectsSection from '~/pages/projects';

import { HomeContainer, Content, Section, Player, Gift } from '~/styles/pages/gift';

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
              Liana / <span> Giovanna </span>
            </h1>
            <p className="subtitle">
              <span className="beforeSpan">
          👑 Seja Bem Vinda Princesa  👑{' '}
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
               mais o coração falou mais forte.{' '}
              </p>
            </li>
          </ol>
        </Section>
    
           <Gift id="liana">
          <ol>
            <li>
              <p>
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
               ( eu sei que não vai falar o mesmo :) ) eu não quero ser mais um que namorou vc e te jogou
               quando eu falo te amo é pq eu te amo eu não quero vc chorando por causa de 4 ou mais idiotas que
               te largou vc é linda pra ta chorando por pessoas que não te deram valor eu faço de tudo pra vc 
               gostar de mim oq eu sinto é amor de vdd não é aquele amor que vc pega e namora por 1 mes e larga
               vc ver que eu tento te mostrar eu ja perguntei tanto pra minha vida se eu vou encontrar alguem que me ame
               que faça oq eu fiz pras outras pessoas pra eu pegar fazer o mesmo pra ela eu todo santo dia acordo e fico
               pensando se ela vai me amar se eu vou pro lugar que ela mora pra encontrar-la, eu te amo demais e vc não
               ver isso as pessoas cansa de ficar batendo palmas, chorando, rindo e batendo pra vc ficar bem as pessoas
               que vão querer vc não é por vc e sim por interesse que vai se qualquer coisa eu vou pra São Paulo e eu
               vou ficar la e se vc for eu vou fazer questão de encontrar vc pois se uma menina linda sofre tanto ai é demais
               eu não quero ficar pensando é so mais um amigo pra lista dela, Liana eu quero cuidar do seu coração cuidar de vc
               mais não preparar vc pra outro cara, oq eu sinto não é amor que vc pega e joga fora tem pessoas que pede muito por
               um coração desse e so tem coração preto vc não vai achar uma pessoa que ta tentando fazer vc feliz mesmo no choro
               eu me quero te conhecer e não saber oq as pessoas me falam, muitas pessoas falam ela não presta, vc vai sofrer, 
               sai dessa ilusão, para de ser cego mais eu to indo atras de vc pq eu te amo não vou ser mais um que vai atras
               e dps fecha as portas do paraiso pra voltar, ja pensou eu to aqui indo atras e dps vc me perde... ngm quer isso e vc vai
               ser mais uma que perdeu um coração vermelho pra poder cuidar do seu coração, vc não vai pegar e ficar pensando a ele
               "so quer mais uma pra lista", se eu fosse querer mais uma pra lista eu ja tinha pegado qualquer uma, e vc não é uma qualquer
               pq acha que eu quero te conhecer mais, falar com sua mãe pra conhecer-la eu quero te mostrar que num coração humano
               pequeno é grande pra cuidar de uma pessoa, se Deus guarda tanta pessoa assim no coração pq acha que eu não conseguiria
               eu so quero vc e sei que vc vai falar - "Alisson, a gente ja conversou", "Alisson, para." é vc acha mesmo que eu vou fazer
               oq o Batman não fez, acha que eu vou pegar e ler a sua carta e pensar ta. Ela so vai atras e eu fico de boa, eu não vou parar
               pq eu sei que o Batman parou e vc foi atras e se vc acha que eu vou fazer isso mesmo ta muito errada pois o meu amor por vc é de
               verdade e não é brincadeira.
              </p>
            </li>
          </ol>
        </Gift>

        {/* Projects SectionPage Component
        <ProjectsSection />* /}

        {/* Contact SectionPage Component 
       <ContactPage /> */}
      </HomeContainer>
    // </Layout>
  );
};
export default GiftPage;
