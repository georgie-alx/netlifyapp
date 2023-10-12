import styles from "./ViewList.module.css";

import { useContext } from "react";
import ModeContext from "../context/ModeContext";

function ViewList({ list, handlerDeleteItem, handlerEditItem }) {
  const modeCtx = useContext(ModeContext);

  //Derived State
  const totalAmt = list.reduce((acc, curItem) => acc + curItem.total, 0);

  return (
    <div>
      <table className={`${styles.table} ${!modeCtx.isLight && styles.dark}`}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Disc %</th>
            <th>Total $</th>
            <th>Edit</th>
            <th>Delete</th>
            {/* Add Delete column header here */}
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.discount}</td>
              <td>{item.total.toFixed(2)}</td>
              <td onClick={() => handlerEditItem(item.id)}>✏️</td>
              <td onClick={() => handlerDeleteItem(item.id)}>❌</td>
              {/* Add Delete column data cell here */}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.containerSum}>
        Total sum: <span className={styles.sum}>{totalAmt.toFixed(2)}</span>
      </div>
    </div>
  );
}
export default ViewList;
