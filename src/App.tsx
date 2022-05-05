import React, { useCallback, useState } from "react";
import { useToast } from "react-components";
import { ElementStatus } from "react-components/dist/shared/theme/colors";
import * as C from "./appStyles";
import Card from "./components/card";
import { listStatus } from "./components/listStatus";

function App() {
  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [IMC, setIMC] = useState<number>(0);
  const [currentSituation, setCurrentSituation] = useState<string>();
  const { addToast } = useToast();

  const handleHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(parseFloat(e.target.value));
  };

  const handleWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(parseFloat(e.target.value));
  };

  const handleErrorImcCalculate = useCallback(
    (title: string, subtitle: string, status: ElementStatus = "warning") => {
      addToast({ title: title, status: status, subtitle: subtitle, duration: 3000, position: "top-right" });
    },
    [addToast]
  );

  const handleIMC = () => {
    if (!height || height < 0) {
      handleErrorImcCalculate("Altura", "Altura inválida");
      setCurrentSituation(undefined)
      return;
    }

    if (!weight || weight < 0) {
      handleErrorImcCalculate("Peso", "Peso inválido");
      setCurrentSituation(undefined)
      return;
    }

    const newIMC = weight / (height * height);
    if (!newIMC) return console.error;

    setIMC(weight / (height * height));

    const foundStatus = listStatus.find(list => newIMC > list.bottomLimit && newIMC < list.upperLimit);

    if (!foundStatus) {
      handleErrorImcCalculate("Status", "Nao foi encontrado nenhum status");
      setCurrentSituation(undefined)
      return;
    }

    handleErrorImcCalculate("Sucesso", "IMC calculado com Sucesso!", "success");
    setCurrentSituation(undefined)
    setCurrentSituation(foundStatus.situation);
  };
  console.log(currentSituation)
  return (
    <C.Body>
      <C.Header />
      <C.Main>
        <C.Left>
          <C.Info>
            <h1>Calcule seu IMC.</h1>
            <p>
              IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para
              calcular o peso ideal de cada pessoa.
            </p>
          </C.Info>
          <C.Inputs>
            <input type="number" onChange={handleHeight} placeholder="Digite sua altura. Ex: 1.5 (em metros)" />
            <input type="number" onChange={handleWeight} placeholder="Digite seu peso. Ex: 75.3 (em kg)" />
            <button onClick={handleIMC}>Calcular</button>
          </C.Inputs>
        </C.Left>
        <C.Right>
          {listStatus.map((items, index) => (
            <Card key={index} data={items} isSelected={currentSituation === items.situation} IMC={IMC} handleClearCallBack={() => setCurrentSituation(undefined)} />
          ))}
        </C.Right>
      </C.Main>
    </C.Body>
  );
}

export default App;