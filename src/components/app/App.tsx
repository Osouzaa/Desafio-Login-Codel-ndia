import ImgLogin from "../../img/img.svg";
import { FormInput } from "../Form";
import { Title } from "../TitleForm";
import { Buttons } from "../buttons";
import { Inputs } from "../inputs";
import * as C from "./style";
import Logo from "../../img/LogoGoogle.svg";
import { Register } from "../register";

function App() {
  return (
    <C.Container>
      <div>
        <C.ImageSvg src={ImgLogin} alt="" />
      </div>
      {/* Aqui */}
      <div>
        <Title subTitle="Bem vindo de volta" Title="Faça login na sua conta" />
        <FormInput
          type="text"
          label="E-mail"
          placeholder="GabrielDev@gmail.com"
        />
        <FormInput type="password" label="Senha" placeholder="*********" />
        <Inputs />
        <Buttons text="Entrar" />
        <Buttons
          text="Ou faça login com o Google "
          img={Logo}
          className="google"
        />
        <Register />
      </div>
    </C.Container>
  );
}

export default App;
