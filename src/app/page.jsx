import CustomButton from "src/components/Button/Button";
import Image from "next/image";
import Link from "next/link";
import Hero from "public/images/Hero.svg";

export default function Home() {
  return (
    <div className="flex items-center gap-7 flex-wrap-reverse lg:flex-nowrap text-center lg:text-start">
      <div>
        <h1
          className="landingTitle text-3xl lg:text-6xl"
          style={{
            marginBottom: "15px",
            textTransform: "uppercase",
            fontWeight: "700",
            lineHeight: '1.3'
          }}
        >
          your best online shop destinaton!
        </h1>
        <p style={{ marginBottom: "15px", lineHeight: "2" }} className="lg:text-xl text-lg">
          Discover a world of endless shoping possibilities at our online store.
          Browse, Choose, and order your favorite products from the comfort of
          your home.
        </p>
        <Link className="shopButton" href="/products">
          <CustomButton name="SHOP NOW" />
        </Link>
      </div>
      <div style={{ width: "1285px" }}>
        <Image width={"auto"} height={"auto"} priority src={Hero} alt="photo" />
      </div>
    </div>
  );
}
