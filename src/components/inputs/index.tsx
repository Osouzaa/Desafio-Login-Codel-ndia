import * as C from "./style";


const Inputs = () => {
  return (
    <C.InputsContent>
      <C.InputCheck>
        <input type="radio" id="Check" />
        <label htmlFor="Check">Lembre de mim</label>
      </C.InputCheck>
      <div>
        <p>Esqueceu a senha?</p>
      </div>
    </C.InputsContent>
  );
};

export { Inputs };
