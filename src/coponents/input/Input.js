import { StyledFormControl, StyledInput, StyledLabel } from "./InputStyle";

const Input = (props) => {
  const element = (
    <StyledInput
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
  return (
    <StyledFormControl className={`form-control`}>
      <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
      {element}
    </StyledFormControl>
  );
};

export default Input;
