import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const animation = (props) =>
  css`
    ${rotate} 1s ease-in-out infinite;
  `;

export const Root = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid #137b85;
  border-radius: 50%;
  border-top-color: #fff;
  animation: ${animation};
`;
