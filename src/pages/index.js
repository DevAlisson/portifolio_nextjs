import React from 'react';

import Layout from '~/layouts/Default';

import Slider from '~/components/Slider';

import { HomeContainer, Content } from '~/styles/pages/index';

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
          </div>
        </Content>
      </HomeContainer>
    </Layout>
  </>
);

export default HomePage;
