
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default function Quantity({quantity, setQuantity}) {
  return (
    <div
    className="flex"
    style={{
      height: "24px",
      color: "black",
      fontSize: "15px",
      border: "2px solid #eee",
    }}
  >
    <button
      style={{
        borderRight: "2px solid #eee",
        backgroundColor: "#fff",
        width: "24px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => {
        if (quantity < 2) {
        } else {
          setQuantity(quantity - 1);
        }
      }}
    >
      <FontAwesomeIcon icon={faMinus} />
    </button>
    <div
      style={{
        width: "38px",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {quantity}
    </div>
    <button
      style={{
        borderLeft: "2px solid #eee",
        backgroundColor: "#fff",
        width: "24px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => {
        if (quantity > 9) {
        } else {
          setQuantity(quantity + 1);
        }
      }}
    >
      <FontAwesomeIcon icon={faPlus} />
    </button>
  </div>
  )
}
