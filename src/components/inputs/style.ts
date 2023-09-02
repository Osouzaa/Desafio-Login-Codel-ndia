import styled from "styled-components";

const InputsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 54px;

  p {
    color: #2b6cb0;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const InputCheck = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4em;

  label {
    color: #1a202c;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export { InputsContent, InputCheck };
