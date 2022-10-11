import React from "react";

import classes from "./AvailableItems.module.css";
import Item from "./Items/Item";

const DUMMY_DATA = [
  {
    id: "d1",
    name: "T-Shirt",
    price: 19.9,
    description: "Some nice T-shirt",
  },
  {
    id: "d2",
    name: "Pants",
    price: 15.22,
    description: "Pants that only I like",
  },
  {
    id: "d3",
    name: "Jeans",
    price: 125,
    description: "Overpriced jeans",
  },
  {
    id: "d4",
    name: "Pants",
    price: 15.22,
    description: "Pants that only I like",
  },
  {
    id: "d5",
    name: "Hoody",
    price: 25.32,
    description: "Hackers hoody",
  },
  {
    id: "d6",
    name: "Socks",
    price: 5.27,
    description: "Warm Socks",
  },
  {
    id: "d7",
    name: "Bag",
    price: 75.35,
    description: "Do you want this Bag",
  },
  {
    id: "d8",
    name: "New Pants",
    price: 11.22,
    description: "New Pants that only I like",
  },
];

const AvailableItems = (props) => {
  const carItem = DUMMY_DATA.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));
  return (
    <div className={classes.table}>
      <ul className={classes.tableList}>{carItem}</ul>
    </div>
  );
};

export default AvailableItems;
