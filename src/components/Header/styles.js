import styled, { css } from 'styled-components';

export const Container = styled.header`
  position: fixed;
  display: flex;
  z-index: 999;
  width: 100vw;
  height: 80px;
  padding: 20px 60px;

  align-items: center;
  justify-content: center;
  transition: box-shadow 150ms, background-color 200ms linear,
    height 200ms ease-in;

  a {
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
    color: #fff;
  }
  a:hover {
    transition: 1000ms;
    color: #ff69b4;
  }

  ${props =>
    props.scrolled &&
    css`
      height: 60px;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.5);
      background-color: #333533;
    `}
  @media(max-width:512px) {
    white-space: nowrap;
  }
`;

export const Navigation = styled.nav`
  a {
    & + a {
      margin-left: 20px;
    }
  }
`;
