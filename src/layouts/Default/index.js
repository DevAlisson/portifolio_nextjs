import PropTypes from 'prop-types';
import React from 'react';

import Header from '~/components/Header';

import { Main } from './styles';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />

      <Main>{children}</Main>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
