
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default function QuantityCart({quantity, setCart, id, cart}) {
  return (
    <div
    className="flex"
    style={{
      height: "24px",
      maxWidth: '88px',
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
          const editCart = cart.map((p) => {
            if (id === p.id) {
              return {
                ...p,
                quantityProduct: quantity - 1,
                totalPrice: p.unitPrice * (quantity - 1),
              };
            } else {
              return p;
            }
          });
          setCart(editCart);
          localStorage.setItem("cart", JSON.stringify(editCart));
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
          const editCart = cart.map((p) => {
            if (id === p.id) {
              return {
                ...p,
                quantityProduct: quantity + 1,
                totalPrice: p.unitPrice * (quantity + 1),
              };
            } else {
              return p;
            }
          });
          setCart(editCart);
          localStorage.setItem("cart", JSON.stringify(editCart));
        }
      }}
    >
      <FontAwesomeIcon icon={faPlus} />
    </button>
  </div>
  )
}
