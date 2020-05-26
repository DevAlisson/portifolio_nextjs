import React, { useEffect, useState, useCallback } from 'react';

import Link from '../Link';

import { Container, Navigation } from './styles';

const HeaderComponent = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScrolled = useCallback(bool => setScrolled(bool), [scrolled]);

  useEffect(() => {
    setScrolled(!!(window.pageYOffset > 80));

    window.addEventListener('scroll', () => {
      handleScrolled(!!(window.pageYOffset > 80));
    });
  }, []);
  return (
    <Container>
      <Navigation>
        <Link href="/#####">Inicio</Link>
        <Link href="/#####">Inicio</Link>
      </Navigation>
    </Container>
  );
};

export default HeaderComponent;
