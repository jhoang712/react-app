//import { Fragment } from "react";
//import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  //
  onSelectItem: (item: string) => void; // just like onClick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook, function that allows us to tap into built in features of React
  // each component has its own state
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //const items = [];

  //functions can be better than constants because you can then use parameters
  // const getMessage = () => {
  //   items.length === 0 ? <p>No item found</p> : null
  // }
  // Event handler
  //  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    // empty <> = wrapping with Fragment. used because you can only return one thing, so we wrap everything
    // use map function to take each item and convert it to an li element
    // each element should have a unique key so React can keep track
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            //{} = DYNAMICALLY
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // set selectedIndex to index of the current item
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
