import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 414px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ImageSvg = styled.img`
  @media (max-width: 414px) {
    display: none;
  }
`;

export { Container, ImageSvg };
