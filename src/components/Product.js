import { useState, useContext } from "react";

import { v4 as uuid } from "uuid";

import styles from "./Product.module.css";
import Card from "./Card";
import ViewList from "./ViewList";
import ViewForm from "./ViewForm";

import ProductContext from "../context/ProductContext";
import ModeContext from "../context/ModeContext";
import Toggle from "./Toggle";

function Product() {
  const ctx = useContext(ProductContext);
  const modeCtx = useContext(ModeContext);
  const [list, setList] = useState([]);
  // const [sumTotal, setSumTotal] = useState(0);

  /*
    CREATE: Add a new product into the list
  */
  const handlerAddProduct = () => {
    const newItem = {
      id: uuid(),
      // id: null,
      name: ctx.name,
      quantity: ctx.count,
      price: ctx.price,
      discount: ctx.discount,
      total: (ctx.count * ctx.price * (100 - ctx.discount)) / 100,
    };
    const newList = [...list, newItem];
    setList(newList);
    // const sum = sumTotal + newItem.total;
    // setSumTotal(sum);
  };

  /*
    DELETE: Remove a  product from the list
  */
  const handlerDeleteProduct = (id) => {
    setList((curList) => {
      if (editMode) {
        return curList;
      } else {
        // makes a copy of original arr
        const updatedList = curList.filter((item) => item.id !== id);
        return updatedList;
      }
    });
  };
  //

  /*
    UPDATE: Edit a  product in the list
  */
  const [editMode, setEditMode] = useState(false);
  const [editItem, setEditItem] = useState({
    index: 0,
    name: "",
    quantity: 0,
    price: 0,
    discount: 0,
  });

  const handlerUpdateProduct = (editId) => {
    const index = list.findIndex((item) => item.id === editId);
    console.log("edit clicked");
    setEditMode(true);
    setEditItem(() => {
      const item = { ...list[index] };
      item.index = index;
      return item;
    });
    console.log(editItem);
  };

  //ref function below from answer in part 2 final assignment
  const handlerUpdateForm = (event, key) => {
    const value = event.target.value;
    const updatedItem = {
      ...editItem,
      [key]: value,
    };

    setEditItem(updatedItem);
  };

  const handlerSubmitForm = (index) => {
    setList((prevList) => {
      const updatedList = [...prevList];
      updatedList[index] = editItem;
      updatedList[index].total =
        updatedList[index].quantity *
        updatedList[index].price *
        (1 - updatedList[index].discount / 100);
      return updatedList;
    });
    setEditMode(false);
  };

  //---------------------------------------------------------------------------

  return (
    <div className={`${styles.container} ${modeCtx.isDark && styles.dark}`}>
      <Toggle />
      <Card handlerAddProduct={handlerAddProduct} />
      <ViewList
        list={list}
        // sum={totalAmt}
        handlerDeleteItem={handlerDeleteProduct}
        handlerEditItem={handlerUpdateProduct}
      />
      {editMode && (
        <ViewForm
          item={editItem}
          handlerUpdateForm={handlerUpdateForm}
          handlerSubmitForm={handlerSubmitForm}
        />
      )}
    </div>
  );
}

export default Product;
