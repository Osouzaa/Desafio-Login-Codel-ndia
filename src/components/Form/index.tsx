import * as C from "./style";

interface IProps {
  label: string;
  type: string;
  value?: string;
  placeholder: string;
}

const FormInput = ({ label, type, value, placeholder }: IProps) => {
  return (
    <C.ContainerForm>
      <label>{label}</label>
      <input type={type} value={value} placeholder={placeholder} />
    </C.ContainerForm>
  );
};

export { FormInput };
