import React, { useEffect, useState, useCallback } from 'react';

import Link from '../Link';

import { Container, Navigation } from './styles';

const HeaderComponent = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScrolled = useCallback(bool => setScrolled(bool), [scrolled]);

  useEffect(() => {
    setScrolled(!!(window.pageYOffset > 120));

    window.addEventListener('scroll', () => {
      handleScrolled(!!(window.pageYOffset > 120));
    });
  }, []);
  return (
    <Container scrolled={scrolled}>
      <Navigation>
        <Link href="/#####">Inicio</Link>
        <Link href="#aboutme">Sobre Mim</Link>
        <Link href="/#####">Projetos</Link>
        <Link href="/#####">Contato</Link>
      </Navigation>
    </Container>
  );
};

export default HeaderComponent;
