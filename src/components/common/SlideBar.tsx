import { useState, useEffect } from "react";

interface SlideItem {
  id: number;
  title: string;
  subtitle?: string;
  image?: string;
  bgColor?: string;
}

interface SlideBarProps {
  slides: SlideItem[];
  interval?: number; // Thời gian tự chuyển (ms)
}

export default function SlideBar({ slides, interval = 4000 }: SlideBarProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full  mx-auto rounded-2xl overflow-hidden shadow-xl">
      {/* Slide */}
      <div
        className="transition-all duration-700 ease-in-out"
        style={{
          backgroundColor: slides[current].bgColor || "#FFD700",
          backgroundImage: slides[current].image
            ? `url(${slides[current].image})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center justify-between px-10 py-16 bg-black/40 text-white">
          <div>
            <h2 className="text-3xl font-bold">{slides[current].title}</h2>
            {slides[current].subtitle && (
              <p className="text-lg mt-2 text-gray-100">
                {slides[current].subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Nút điều hướng */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-black hover:text-white text-black p-2 rounded-full transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-black hover:text-white text-black p-2 rounded-full transition"
      >
        ❯
      </button>

      {/* Dấu chấm */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === current ? "bg-yellow-500" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
