import { useEffect, useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?fm=jpg&q=80&w=1920",
    alt: "Clothing Store Display - Fashion Apparel",
  },
  {
    src: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?fm=jpg&q=80&w=1920",
    alt: "Shoes Product Display - Sneakers",
  },
  {
    src: "https://m.media-amazon.com/images/I/51a9h3i3cjL._AC_UF1000,1000_QL80_.jpg",
    alt: "Laptop Workspace - Electronics Product",
  },
  {
    src: "https://m.media-amazon.com/images/I/613roHddT0L._UF1000,1000_QL80_.jpg",
    alt: "Mobile Phone Product Shot",
  },
  {
    src: "https://i.pinimg.com/736x/7b/8a/15/7b8a155d30e01dc5a622bde4fd1e2a14.jpg",
    alt: "Shirts Product Display - Casual Wear",
  },
];

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-sm shadow-md mt-20">
      {/* Slider container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div> */}

    </div>
  );
};
