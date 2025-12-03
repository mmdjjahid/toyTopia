import React from "react";
import ToyCard from "../../component/ToyCard";

const PopularToys = ({ toysData }) => {
  // console.log(toysData)
  return (
    <section className="py-12 bg-gray-50">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Popular Collection
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Discover our hand-picked selection of premium goods.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {toysData.map((toyData) => (
          <ToyCard key={toyData.toyId} product={toyData}></ToyCard>
        ))}
        </div>
      </div>
    </section>
  );
};

export default PopularToys;
