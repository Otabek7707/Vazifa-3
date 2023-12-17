import { useSelector } from "react-redux"


export default function Navbar() {
    const { amount } = useSelector((state) => state.cart);
  return (
      <div className="nav">
          <ul>
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>{ amount}</li>
          </ul>
    </div>
  )
}
