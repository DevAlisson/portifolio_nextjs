import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  display: flex;
  padding: 120px 0;
  flex-direction: column;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 8rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.9);
  }
`;

export const FormContainer = styled.div`
  display: flex;
  padding: 50px 20px;
  #form {
    width: 100%;
  }
`;
export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
`;
