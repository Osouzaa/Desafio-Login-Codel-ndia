import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 162px;
  gap: 0.3em;
  p {
    color: #1a202c;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  span {
    color: #2b6cb0;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (max-width: 414px) {
    padding-top: 92px;
  }
`;

export { Container };
