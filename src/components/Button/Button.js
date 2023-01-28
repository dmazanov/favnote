import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-block;
  min-width: ${({ width }) => width || '220px'};
  height: 47px;
  padding: 0;
  border: none;
  border-radius: 50px;
  background-color: #ffd82b;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      min-width: 105px;
      height: 30px;
      font-size: 10px;
      background-color: #e6e6e6;
    `}
`;

export default Button;
