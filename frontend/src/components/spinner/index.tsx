import {
    SpinnerContainer,
    SpinnerCircle,
    SpinnerText,
  } from './styled';
  
  type SpinnerProps = {
    label?: string;
  };
  
  function Spinner({ label = 'Loading...' }: SpinnerProps) {
    return (
      <SpinnerContainer
        role="status"
        aria-live="polite"
        aria-label={label}
      >
        <SpinnerCircle />
        <SpinnerText>{label}</SpinnerText>
      </SpinnerContainer>
    );
  }
  
  export default Spinner;