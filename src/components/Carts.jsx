import { useSelector } from "react-redux"
import Cart from "./Cart";


export default function Carts() {
    const { items } = useSelector((state) => state.cart);
  return (
      <div>
          {items.map((item) => <Cart key={item.id} {...item} />)}
    </div>
  )
}
