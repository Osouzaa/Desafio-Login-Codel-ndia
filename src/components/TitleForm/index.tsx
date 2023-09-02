import * as C from "./style";

interface IProps {
  subTitle: string;
  Title: string;
}

const Title = ({ Title, subTitle }: IProps) => {
  return (
    <C.ContainerTitle>
      <p>{subTitle}</p>
      <h2>{Title}</h2>
    </C.ContainerTitle>
  );
};

export { Title };
