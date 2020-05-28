import PropTypes from 'prop-types';
import React from 'react';

import Footer from '~/components/Footer';
import Header from '~/components/Header';

import { Main } from './styles';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />

      <Main>{children}</Main>

      <Footer />
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
