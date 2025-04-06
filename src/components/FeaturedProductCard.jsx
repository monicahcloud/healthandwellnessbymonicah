import { nanoid } from "nanoid";
import Ebundle from "../assets/essentialbundle.png";
import Renu28 from "../assets/renu28.png";
import gold from "../assets/gold.png";

const featuredproducts = [
  {
    id: nanoid(),
    img: gold,
    url: "https://shop.aseaglobal.com/products/5749?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "REDOXGold™ Massage + Soothing Gel",
    text: "REDOXGold™ absorbs quickly for fast-acting comfort and soothing relief with lasting results. Push your body to the limits and take back control to keep doing what you love, powered by next-generation redox technology. ",
    retail: "$70.00",
    subscription: "$55.00",
  },
  {
    id: nanoid(),
    img: Ebundle,
    url: "https://shop.aseaglobal.com/products/5584?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "Essential Bundle",
    text: "6 bottles of ASEA Redox Cell Signaling Supplement, 1 tube of RENU28 Revitalizing Redox Gel, Shipping included",
    className: "rounded-md mb-4 size-48",
    retail: "NA",
    subscription: "$215.00",
  },
  {
    id: nanoid(),
    img: Renu28,
    url: "https://shop.aseaglobal.com/products/3146?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "RENU28",
    className: "rounded-md mb-4 h-52 ",
    text: "RENU28® promotes hydration, elasticity, soothing, and skin surface cellular renewal. One simple gel, so many benefits.",
    retail: "$54.00",
    subscription: "$43.00",
  },
];

const FeaturedProductCard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {featuredproducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 items-start hover:shadow-lg transition-shadow">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-[300px]"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 font-bold ">Retail: {product.retail}</p>
            <p className="text-gray-700 font-bold">
              Subscription: {product.subscription}
            </p>
            <p className="text-gray-700">{product.text}</p>
            {/* <a href={product.url} target="_blank" rel="noopener noreferrer">
              <TbWorldWww className="h-10 w-14 text-cyan-600 hover:text-cyan-400 duration-300" />
            </a> */}
            <a href={product.url} target="_blank" rel="noopener noreferrer">
              <h3 className="pt-5 text-cyan-500 font-bold ">BUY HERE</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductCard;
