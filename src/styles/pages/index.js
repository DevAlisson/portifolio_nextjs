import styled from 'styled-components';

export const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`;

export const Content = styled.section`
  position: relative;
  height: 100vh;
  height: 100vh;

  & > section {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    left: 0;
  }

  & > div {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 2;

    padding: 20px 40px;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8));

    h1 {
      font-size: 10rem;
      text-align: center;
    }

    p {
      margin-top: 10px;
      font-size: 4rem;
    }
    & > span {
      margin-top: 40px;
      a {
        display: flex;
        padding: 20px;
        border-radius: 50%;
        border: 4px solid #006daa;
        background-color: #0353a4;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
        transition: background-color 200ms;
        &:hover {
          background-color: #006daa;
        }
      }
    }
  }
`;
