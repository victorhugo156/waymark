import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const SpinnerCircle = styled.div`
  width: 40px;
  height: 40px;

  border: 4px solid #e5e5e5;
  border-top-color: #f5c518;
  border-radius: 50%;

  animation: ${rotate} 0.8s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 1.8s;
  }
`;

export const SpinnerText = styled.span`
  font-size: 14px;
  color: #2d2d2d;
`;