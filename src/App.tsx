import React, { useState } from 'react';
import * as C from './appStyles'
import Card from './components/card'
import { listStatus } from './components/listStatus'

function App() {
  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [IMC, setIMC] = useState<number>(0);
  const [currentSituation, setCurrentSituation] = useState<string>()

  const handleHeight = (e:React.ChangeEvent<HTMLInputElement>) => {
    setHeight(parseFloat(e.target.value))
  }

  const handleWeight = (e:React.ChangeEvent<HTMLInputElement>) => {
    setWeight(parseFloat(e.target.value))
  }

  const handleIMC = () => {
    if (!height || height < 0) return alert('Por favor, informe uma condição válida!')
    if (!weight || weight < 0) return alert('Por favor, informe uma condição válida!')
    // let IMC = weight/(height*height)
    setIMC(weight/(height*height))
    console.log(IMC)
    if (!IMC) return console.error
    const foundStatus = listStatus.find((list) => IMC > list.bottomLimit && IMC < list.upperLimit)
    if (!foundStatus) return alert('Por favor, informe uma condição válida!')
    setCurrentSituation(foundStatus.situation)
  }

  return (
    <C.Body>
      <C.Header />
      <C.Main>
        <C.Left>
          <C.Info>
            <h1>Calcule seu IMC.</h1>
            <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          </C.Info>
          <C.Inputs>
            <input type="number" onChange={handleHeight} placeholder='Digite sua altura. Ex: 1.5 (em metros)' />
            <input type="number" onChange={handleWeight} placeholder='Digite seu peso. Ex: 75.3 (em kg)' />
            <button onClick={handleIMC}>Calcular</button>
          </C.Inputs>
        </C.Left>
        <C.Right>
          {listStatus.map((items, index)=> (
            <Card key={index} data={items} isSelected={currentSituation === items.situation} IMC={IMC} />
          ))}
        </C.Right>
      </C.Main>
    </C.Body>
  );
}

export default App;