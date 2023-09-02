import styled from "styled-components";

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  label {
    color: #1a202c;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 11px;
  }

  input {
    border-radius: 5px;
    border: 1px solid #e8e8e8;
    height: 50px;
    width: 450px;
    margin-bottom: 11px;
    padding-left: 20px;

    &::placeholder {
      color: #0303;
    }
    @media (max-width: 414px) {
      width: 350px;
    }
  }
`;

export { ContainerForm };
