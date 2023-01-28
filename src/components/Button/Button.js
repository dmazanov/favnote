import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  min-width: ${({ secondary }) => (secondary ? '105px' : '220px')};
  height: ${({ secondary }) => (secondary ? '30px' : '47px')};
  padding: 0;
  border: none;
  border-radius: 50px;
  background-color: ${({ secondary }) => (secondary ? '#e6e6e6' : '#ffd82b')};
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: ${({ secondary }) => (secondary ? '10px' : '16px')};
  text-transform: uppercase;
`;

export default Button;
