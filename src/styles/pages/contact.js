import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  display: flex;
  padding: 100px 0;
  flex-direction: column;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    color: #eec643;
    font-size: 8rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.9);
  }
`;

export const Form = styled.div`
  position: relative;
  display: flex;
  padding: 30px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    background-color: #eec643;
    margin: 10px;
    width: 150px;
    height: 30px;
    border-radius: 4%;
    font-weight: bold;
    color: #000;
  }
  button:hover {
    transition: 800ms;
    background-color: #000;
    color: #fff;
  }
`;
export const Inputs = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    text-transform: uppercase;
    margin: 5px;
  }
  input {
    width: 350px;
    height: 30px;
    border-radius: 3%;
    margin: 10px;
    text-align: center;
    font-weight: 500;
  }
  textarea {
    width: 350px;
    height: 100px;
    border-radius: 2%;
    font-weight: 500;
  }

  @media (max-width: 512px) {
    input {
      width: 200px;
    }
    textarea {
      width: 200px;
    }
  }
`;
