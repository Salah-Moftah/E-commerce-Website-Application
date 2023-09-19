import { useContext } from "react";
import { ThemeContextMode } from "src/context/ThemeContext";

export default function Price({ product }) {
  const { mode } = useContext(ThemeContextMode);
  
  return (
    <div
      style={{
        padding: "15px",
        backgroundColor: mode === "light" ? "#eee" : "#2d2d2d",
        marginBottom: "20px",
      }}
    >
      <div style={{ marginBottom: "8px" }}>
        <span style={{ textDecoration: "line-through", opacity: "0.7" }}>
          ${product.price?.toFixed(2)}
        </span>{" "}
        <span>(inclusive of all taxes)</span>
      </div>
      <div>
        <span
          style={{
            position: "relative",
            fontSize: "25px",
            color: "var(--color-primary)",
            fontWeight: "700",
          }}
        >
          $
          {(
            product.price -
            product.price * (product.discountPercentage / 100)
          ).toFixed(2)}
          <span
            style={{
              fontSize: "12px",
              backgroundColor: "var(--color-primary)",
              borderRadius: "4px",
              paddingRight: "3px",
              paddingLeft: "3px",
              color: "#111",
              fontWeight: "700px",
              textAlign: "start",
              position: "absolute",
              top: "0",
              right: "-82px",
            }}
          >
            {product.discountPercentage}% OFF
          </span>
        </span>
      </div>
    </div>
  );
}
