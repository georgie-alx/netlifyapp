import styles from "./ViewList.module.css";
import Input from "./Input";
import Button from "./Button";

import { useContext } from "react";
import ModeContext from "../context/ModeContext";

function ViewForm({ index, item, handlerUpdateForm, handlerSubmitForm }) {
  const modeCtx = useContext(ModeContext);
  return (
    <div>
      <table className={`${styles.table} ${!modeCtx.isLight && styles.dark}`}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Disc %</th>
          </tr>
        </thead>
        <tbody>
          <tr key={item.id}>
            <td>
              <input
                value={item.name}
                onChange={(e) => handlerUpdateForm(e, "name")}
              />
            </td>
            <td>
              <input
                value={item.quantity}
                onChange={(e) => handlerUpdateForm(e, "quantity")}
              />
            </td>
            <td>
              <input
                value={item.price}
                onChange={(e) => handlerUpdateForm(e, "price")}
              />
            </td>
            <td>
              <input
                value={item.discount}
                onChange={(e) => handlerUpdateForm(e, "discount")}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Button label="Submit" onClick={() => handlerSubmitForm(item.index)} />
      <Button label="Cancel" />
    </div>
  );
}
export default ViewForm;
