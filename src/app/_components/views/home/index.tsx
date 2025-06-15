"use client";

import { ProductCard } from "@/app/_components/common/Card";

const Section = () => {
  return (
    <div className="home-page">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <ProductCard
            key={item}
            title={`Product ${item}`}
            price={99.99}
            discount={20}
            rating={4.5}
            imageId={item}
            onAddToCart={() => {
              // Handle add to cart logic
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default Section;
