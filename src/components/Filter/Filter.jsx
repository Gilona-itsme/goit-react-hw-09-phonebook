import React from "react";

import s from "./Filter.module.scss"

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={s.filter}>
   
      <input className={s.input}
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
        name="filter"
        placeholder="Enter name for Search"
      ></input>
    </div>
  );
};

export default Filter;
