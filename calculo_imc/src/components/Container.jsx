import React from 'react'
import { useState } from 'react'
import './container.css'
import Information from './Information.jsx'


function Container() {

    const [altura, setAltura] = useState();
    const [peso, setPeso] = useState();
    const [name, setName] = useState();

    function calcularImc() {
        const resultado = peso / (altura * altura)

        if (resultado <= 18.5) {
            return `${resultado.toFixed(2)} Você está abaixo do peso ideal.Isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico.`

        
        } else if ((resultado >= 18.5) && (resultado <= 24.9)) {
            return `${resultado.toFixed(2)} Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais.`
        } else if ((resultado >= 25) && resultado <= 29.9) {
            return `${resultado.toFixed(2)} Você está com sobrepeso. Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico`
        } else if ((resultado >= 30) && resultado <= 34.9) {
            return `${resultado.toFixed(2)} Você está com Obesidade grau I Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde. Procure um médico para definir o tratamento mais adequado para você.`
        } else if ((resultado >= 35) && resultado <= 39.9) {
            return `${resultado.toFixed(2)} Você está com Obesidade grau II Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas está entre alto e muito alto. Busque ajuda de um profissional de saúde; não perca tempo.`
        } else if (resultado >= 40) {
            return `${resultado.toFixed(2)} Você está com Obesidade grau III Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas é muito alto. Busque ajuda de um profissional de saúde; não perca tempo.`
        }
    }


    return (
        <div id='container'>
            <h1>Calcule Seu IMC</h1>
            <main>
                <form>
                    <div id="label">
                        <label>Nome:</label>
                        <label>Altura (M): </label>
                        <label>Peso (kg): </label>
                    </div>
                    <div id="inputs">
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <input
                            type="number"
                            placeholder='Digite sua Altura'
                            value={altura} onChange={(e) => setAltura(e.target.value)}
                            required
                        />

                        <input type="number"
                            placeholder='Digite o seu Peso'
                            value={peso} onChange={(e) => setPeso(e.target.value)}
                            required
                        />
                    </div>
                </form>
                <div id="buttons">
                    <button id='calc'>Calcular</button>
                    <button id='clear' onClick={(e) => setName(e = '')}>Limpar</button>
                </div>
                <div>
                    <Information name={name} imc={calcularImc()} />
                </div>
            </main>

        </div>
    )
}

export default Container