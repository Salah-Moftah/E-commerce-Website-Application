import { CategoryProvider } from "src/context/categoryContext.js";
import ProductsContent from "./products";
import ButtonGroup from "src/components/buttonGroup/buttonGroup.jsx";

export const metadata = {
  title: "Moshop - Products",
  description:
    "Discover a world of endless shoping possibilities at our online store. Browse, Choose, and order your favorite products from the comfort of your home.",
};

export default async function Products() {

  return (
    <div>
      <CategoryProvider>
        <div className="py-5 text-center">
          <ButtonGroup />
        </div>
        <ProductsContent />
      </CategoryProvider>
    </div>
  );
}
