import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  margin: 20px 7rem;
  padding: 20px 0;

  flex-direction: column;
  border-top: 1px solid rgba(192, 194, 196, 0.4);
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 70px;
    height: auto;
  }

  p {
    margin-left: 20px;
    padding: 10px;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    text-align: justify;
    b {
      color: #eba51a;
    }
  }
  @media (max-width: 730px) {
    flex-direction: column;
    p {
      margin-left: 0;
      margin-top: 10px;
      border-left: none;
    }
  }
`;
export const NavigationContainer = styled.div`
  display: flex;
  margin-top: 5px;
  font-weight: 300;
  align-items: center;
  justify-content: center;
  @media (max-width: 630px) {
    flex-direction: column;
    strong {
      margin-bottom: 5px;
    }
  }
`;
export const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  a {
    margin: 5px 15px;
    font-weight: 500;
    color: #047cde;
    transition: color 200ms;
    &:hover {
      color: #73a7fa;
    }
  }
`;
export const Icons = styled.div`
  display: flex;

  svg {
    margin: 5px;
  }
`;
