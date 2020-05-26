/* eslint-disable */

import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const defaultProps = [
  'href',
  'as',
  'passHref',
  'replace',
  'scroll',
  'prefetch',
];

const LinkComponent = ({ children, ...rest }) => {
  const nextLinkProps = defaultProps.reduce(
    (obj, prop) => Object.assign(obj, { [prop]: rest[prop] }),
    {},
  );

  return (
    <NextLink {...nextLinkProps}>
      <a {...rest}>{children}</a>
    </NextLink>
  );
};

LinkComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

LinkComponent.defaultProps = {
  className: '',
};

export default LinkComponent;
