import { HeroSlider } from "../components/HeroSlider";
import { useApp } from "../context/AppContext";
import { ProductCard } from "../components/ProductCard";

export const Home = () => {
  const { products } = useApp();

  return (
    <div className="space-y-8">
      {/* Hero Slider at the top */}
      <HeroSlider />

      {/* Product grid */}
      <h1 className="text-3xl font-bold mt-8">All Products</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};
