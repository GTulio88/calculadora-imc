import { levels } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImg from "../../assets/up.png";
import downImg from "../../assets/down.png";
import arrowImg from "../../assets/leftarrow.png";
const GridItem = ({ item }) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        <img src={item.icon === "up" ? upImg : downImg} width={40} alt="" />
      </div>
      <div className={styles.gridTitle}>{item.title}</div>

      {item.yourImc && (
        <div className={styles.yourImc}> Seu IMC é de {item.yourImc} kg/m²</div>
      )}

      <div className={styles.gridInfo}>
        <>
          <strong>{item.title}</strong> entre <strong>{item.imc[0]}</strong> e{" "}
          <strong>{item.imc[1]}</strong>
        </>
      </div>
    </div>
  );
};

export default GridItem;
