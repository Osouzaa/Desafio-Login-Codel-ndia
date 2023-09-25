import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

const ButtonEntrar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 347px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 5px;
  background: red;
  border: 0;
  cursor: pointer;

  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &.google {
    border-radius: 5px;
    background: #1a202c;
  }
`;
export { Container, ButtonEntrar };
