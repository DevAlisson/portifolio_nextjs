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

    padding: 20% 40px;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8));

    h1 {
      font-size: 10rem;
      text-align: center;

      span {
        color: #0000ff;
      }

      @media (max-width: 515px) {
        display: flex;
        flex-direction: column;
        span {
          color: #0000ff;
        }
      }
    }

    p {
      margin-top: 10px;
      font-size: 4rem;
      margin-left: 5px;
      opacity: 1;
      animation: pisca .7s infinite;

      span {
        color: #0000ff;
    }
   }
  }
`;
export const Section = styled.section`
  position: relative;
  display: flex;
  padding: 120px 0;
  flex-direction: column;
  background-color: #2c2f33;

  ol {
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        margin-right: 20px;
        padding: 10px;
        font-size: 8.9rem;
        border-right: 1px solid rgba(255, 255, 255, 0.9);
      }
      p {
        font-size: 1.9rem;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
        border-left: none;
        line-height: 2.9rem;
        text-align: justify-all;
        b {
          color: #f23859;
        }
      }
      span {
        color: #fff569;
      }
      @media (max-width: 512px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
          border: none;
          display: flex;
          padding: 10px;
          font-size: 8.9rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.9);
        }
        p {
          font-size: 1.9rem;
          margin-left: 10px;
          margin-right: 10px;
          margin-top: 20px;
          border-left: none;
          line-height: 2.9rem;
        }
      }
    }
  }
`;
