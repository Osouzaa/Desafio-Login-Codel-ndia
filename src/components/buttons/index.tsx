import * as C from "./style";

interface IProps {
  text: string;
  className?: string;
  img?: string;
}

const Buttons = ({ text, className, img }: IProps) => {
  return (
    <C.Container>
      <C.ButtonEntrar className={className}>
        {img && <img src={img} />}
        {text}
      </C.ButtonEntrar>
    </C.Container>
  );
};

export { Buttons };
