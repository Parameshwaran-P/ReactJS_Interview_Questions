import React from "react";
 function Listnames() {
  const names = ["Brian", "Paul", "Krug", "Halley"];
   const listItems = names.map((name, index) => <li key={index}>{name}</li>);
   return <ul>{listItems}</ul>;
}
export default Listnames;