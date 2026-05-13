import "./App.css";
import Exemplo1 from "./paginas/Exemplo1";
import Exemplo2 from "./paginas/Exemplo2";

export default function App() {
    return (
        <div>
            <h1> aula 02 - estados de componentes e props</h1>

            <div className="card">
                <h3> Chamada Para o Exemplo 1 </h3>
                <Exemplo1 numero={33} />
                <Exemplo1 numero={43} />
                <Exemplo1 numero={3} />
            </div>
            <div className="card">
                <h3>chmadas para o exemplo 2 </h3>
                <Exemplo2 numero1={33} numero2={34} />
                <Exemplo2 numero1={33} numero2={10} />
                <Exemplo2 numero1={33} numero2={3} />
                <Exemplo2 numero1={33} numero2={4} />
            </div>
            <div className="card">
          <h3>Chamada para o Exemplo 3</h3>
          <Exercicio1 numero={100} />
          <Exercicio1 numero={0} />
          <Exercicio1 numero={32} />
      </div>

    </div>
  )
}
  

    