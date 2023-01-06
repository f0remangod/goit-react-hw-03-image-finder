import { StyledButton } from './Button.styled';

export const Button = ({ text, onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {text}
    </StyledButton>
  );
};
