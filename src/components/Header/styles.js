import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  display: flex;
  z-index: 999;
  width: 100vw;
  height: 80px;
  padding: 20px 60px;

  align-items: center;
  justify-content: flex-end;

  a {
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
  }
`;

export const Navigation = styled.nav`
  a {
    & + a {
      margin-left: 20px;
    }
  }
`;
