import styled from "styled-components";

const StyledFormControl = styled.div`
  margin: 1rem 0;
`;

const StyledLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`;

const StyledInput = styled.input`
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  background: #f8f8f8;
  padding: 0.15rem 0.25rem;
  display: block;

  &:focus {
    outline: none;
    background: #ebebeb;
    border-color: #510077;
  }
`;

export { StyledFormControl, StyledInput, StyledLabel };

/* .form-control {
  margin: 1rem 0;
}

.form-control label,
.form-control input,
.form-control textarea {
  display: block;
}

.form-control label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.form-control input,
.form-control textarea {
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  background: #f8f8f8;
  padding: 0.15rem 0.25rem;
}

.form-control input:focus,
.form-control textarea:focus {
  outline: none;
  background: #ebebeb;
  border-color: #510077;
}

.form-control--invalid label,
.form-control--invalid p {
  color: red;
}

.form-control--invalid input,
.form-control--invalid textarea {
  border-color: red;
  background: #ffd1d1;
} */
