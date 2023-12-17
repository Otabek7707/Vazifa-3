import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function SinglePage() {
  const {tours} = useGlobalContext();
  const {id} = useParams();

  const selectedItem= tours.find((item) => item.id === id);

return (
  <div className="single">
    <img src={selectedItem.image} alt="" />
    <h2>{selectedItem.name}</h2>
    <h2>{selectedItem.info}</h2>
  </div>
)
}