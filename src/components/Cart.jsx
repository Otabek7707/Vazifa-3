/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux"
import { dec, inc,removeItem } from "../features/cartslice";



export default function Cart({ id,title, price, img, amount }) {
    
    const dispatch = useDispatch();
    
  return (
    
      <div className="cart">
          <h2>{title}</h2>
          <img src={img} alt="" />
          <h2>{price}</h2>
          <p className="pp">{amount}</p>
          {
            amount < 0 ?
            
          <button className="btn" onClick={() => dispatch(removeItem(id))}>-</button>
            :
          <button className="btn" onClick={() => dispatch(dec({id}))}>-</button>
          }
          <button className="btn" onClick={() => dispatch(inc({id}))}>+</button>
          <button className="btn1" onClick={() => dispatch(removeItem(id))}>dalete</button>
    </div>
  )
}
