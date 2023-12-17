import { useDispatch } from "react-redux";
import Carts from "./Carts";
import { clearCart } from "../features/cartslice";


export default function Home() {
  const dispatch = useDispatch();
  return (
    <div className="dd">
      <Carts />
      <button className="ss" onClick={() => dispatch(clearCart())}>clear</button>
    </div>
  )
}
