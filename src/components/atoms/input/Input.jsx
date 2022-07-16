import styled from "styled-components";

export const Input = (props) => {
  const { Pleceholder = "" } = props;
  return <SInput type="text" pleceholder={Pleceholder} />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid 1px #ddd;
  border-radius: 30px;
  outline: none;
`;
