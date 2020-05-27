import React from 'react';

import Layout from '~/layouts/Default';

import Slider from '~/components/Slider';

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
            <h1>
              Gabriel <span>HijaZi</span>
            </h1>
            <p>
              Desenvolvedor <span>FullStack!</span>
            </p>
          </div>
        </Content>
        <Section id="aboutme">
          <ol>
            <li>
              <h1>
                Sobre <span>Mim</span>
              </h1>
              <p>
                Olá, meu nome é <b>Gabriel Hijazi</b>, estudante de{' '}
                <b>Engenharia da Computação </b>na{' '}
                <b>Universidade Federal do Mato grosso do Sul</b>. Aprendi a
                maioria das tecnologias de desenvolvimento em casa por puro
                interesse e vontade de me tornar programador de sucesso. Comecei
                com desenvolvimento de bots para Discord mas sempre tive
                interesse no <b>Web e Mobile</b>. Atualmente CEO da organização
                <b> SweetCode</b> onde desenvolvemos por pura diversão buscando
                sempre conhecimento e trabalho em equipe visando o crescimento
                individual e em grupo. Tenho apenas 23 anos e ainda sei que
                tenho muito a aprender mas com foco e determinação alcançarei
                meus objetivos profissionais.
              </p>
            </li>
          </ol>
        </Section>

        {/* Projects Secion Page Component */}
        <ProjectsSection />
      </HomeContainer>
    </Layout>
  </>
);

export default HomePage;
