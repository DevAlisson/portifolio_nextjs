import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  display: flex;
  padding: 120px 0;
  flex-direction: column;
  background-color: #eef0f2;

  h1 {
    color: #000;
    font-size: 7rem;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  z-index: 2;

  justify-content: center;
  margin-top: 5px;

  @media (max-width: 515px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 3.5rem;
    }
    & > span {
      margin-top: 40px;
      a {
        display: flex;
        padding: 10px;

        border-radius: 20px;
      }
    }
  }
`;
export const Row = styled.div`
  display: flex;
  margin: 50px;
  padding: 20px 20px;
  flex-direction: column;
  background-color: #fff;

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5%;

  align-items: center;

  img {
    width: 200px;
    height: 200px;
  }
  h1 {
    text-transform: uppercase;
    color: #000;
    margin: 10px 0;
    padding: 10px 20px;
    font-size: 1.8rem;
    font-weight: 600;
  }

  span {
    text-transform: uppercase;
    color: #000;
    margin: 20px 0;
    padding: 10px 20px;
    font-size: 1.8rem;
    font-weight: 600;
  }
  @media (max-width: 830px) {
    margin: 50px 0;
  }
  @media (max-width: 360px) {
    img {
      width: 150px;
      height: 150px;
    }
  }
`;

export const BrandsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin: 0 10px;
    svg {
      transition: color 200ms;
    }
    &:hover {
      svg {
        color: #0d21a1 !important;
      }
    }
  }
`;
