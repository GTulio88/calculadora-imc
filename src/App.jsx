import { useState } from "react";
import styles from "./App.module.css";
import logo from "./assets/powered.png";
import { levels, calculateImc } from "./helpers/imc";
import GridItem from "./components/GridItem";
import arrowImg from "./assets/leftarrow.png";

function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [showItem, setShowItem] = useState(null);

  const handleCalculate = () => {
    if (altura && peso) {
      setShowItem(calculateImc(altura, peso));
    } else {
      alert("Preencha todos os campos!");
    }
  };

  const handleBack = () => {
    setShowItem(null);
    setAltura(null);
    setPeso(null);
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          {/* <img src={logo} alt="" width={150} /> */}
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calculadora de IMC</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.O índice é calculado da seguinte maneira: divide-se o peso do
            paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo
            tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.
          </p>
          <input
            type="number"
            value={altura > 0 ? altura : ""}
            onChange={(e) => setAltura(parseFloat(e.target.value))}
            placeholder="Digite sua altura em metro. Ex: 1,80"
            disabled={showItem ? true : false}
          />
          <input
            type="number"
            value={peso > 0 ? peso : ""}
            onChange={(e) => setPeso(parseFloat(e.target.value))}
            placeholder="Digite seu peso. EX: 80"
            disabled={showItem ? true : false}
          />
          <button onClick={handleCalculate} disabled={showItem ? true : false}>
            Calcular
          </button>
        </div>
        <div className={styles.rightSide}>
          {!showItem && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}

          {showItem && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBack}>
                <img src={arrowImg} width={25} alt="" />
              </div>
              <GridItem item={showItem} />
            </div>
          )}
        </div>
      </div>
      <footer>
        Copyright © by <i>Getúlio</i>{" "}
      </footer>
    </div>
  );
}

export default App;
