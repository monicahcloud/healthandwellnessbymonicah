import { useState } from "react"
import { products } from "../data"

const ProductCard = () => {
  const [showAll, setShowAll] = useState(false)
    
    const toggleShowAll = () => {
      setShowAll(!showAll)
    }
  
    const displayedProducts = showAll ? products : products.slice(0, 4)
  
    return (
      <div className="flex flex-col items-center">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 items-start hover:shadow-lg transition-shadow"
            >
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="rounded-md w-full mb-4 h-[300px]"
                />
              </a>
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-700 font-bold ">
                Retail: {product.retail}
              </p>
              <p className="text-gray-700 font-bold">
                Subscription: {product.subscription} (processed monthly)
              </p>
              <a href={product.url} target="_blank">
                <span>
                  {" "}
                  <h3 className="pt-5 text-cyan-500 font-bold">
                    BUY HERE
                  </h3>
                </span>{" "}
              </a>
            </div>
          ))}
        </div>
        {products.length > 4 && (
          <button
            onClick={toggleShowAll}
            className="mt-6 mb-6 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        )}
      </div>
    );
}

export default ProductCard
