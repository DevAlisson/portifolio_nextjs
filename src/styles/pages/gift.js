import styled from 'styled-components';
import { Player as VideoPlayer } from 'video-react';

export const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`;

export const Content = styled.section`
  position: relative;
  & > section {
    position: absolute;
    display: flex;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8));
    h1 {
      font-size: 10rem;
      text-align: justify;
      span {
        color: #fff569;
      }
      @media (max-width: 515px) {
        display: flex;
        flex-direction: column;
        span {
          color: #fff569;
        }
      }
    }
    .subtitle {
      margin-top: 10px;
      font-size: 4rem;
    }
  }
  @media (max-width: 512px) {
    h1 {
      padding-top: 20px;
      font-size: 3rem;
      color: #fff569;
    }
    span {
      display: none;
    }
    .beforeSpan:before {
      display: none;
    }
    .subtitle:after {
      content: 'Seja Bem Vinda Gatinha';
      font-size: 3rem;
    }
  }
`;

export const Section = styled.section`
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
          color: #ff0000;
        }
      }
      span {
        color: #ff0000;
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

export const Gift = styled.section`
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
          color: #eec643;
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

export const Player = styled(VideoPlayer)`
  position: relative;
  z-index: 0;
  width: 100%;
  padding-top: 0 !important;
  video {
    left: 0;
    width: 100%;
  }
  span {
    display: none;
  }
  & > div {
    display: none;
  }
`;
