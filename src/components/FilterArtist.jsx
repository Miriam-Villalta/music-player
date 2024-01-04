//import { useState } from "react";

const FilterName = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    props({
      value: ev.target.value,
      key: "name",
    });
  };

  return (
    <>
      <input type="text" name="Barra de buscador" className="icon-search--search__input" placeholder="Search artists" onChange={handleChange}/>
    </>
  );
};

export default FilterName;
