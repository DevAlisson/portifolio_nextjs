import styled from 'styled-components';

export const ProfileContainer = styled.section`
  width: 100%;
  height: auto;
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: auto%;
  left: 0;
  object-fit: cover;
  opacity: ${props => (props.selected ? 1 : 0)};
  transition: opacity 300ms;
`;
