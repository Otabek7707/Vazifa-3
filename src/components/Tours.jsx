/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
// import { useGlobalContext } from "../context";
import Tour from "./Tour";


const Tours = () => {
  // const { removeTour } = useGlobalContext();
  const {items} = useSelector((state) => state.cart)
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {items.map((tour) => {
          return <Tour key={tour.id} {...tour}/>;
        })}
      </div>
    </section>
  );
};

export default Tours;
