"use client";

import { useState } from "react";
import Image from "next/image";

type ImageCompareProps = {
  leftImage: string;
  rightImage: string;
  leftLabel: string;
  rightLabel: string;
  alt: string;
};

export function ImageCompare({
  leftImage,
  rightImage,
  leftLabel,
  rightLabel,
  alt,
}: ImageCompareProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div
      className="relative aspect-[16/9] w-full overflow-hidden cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={() => setSliderPosition(50)}
    >
      {/* Left Image (Summer) */}
      <div className="absolute inset-0">
        <Image
          src={leftImage}
          alt={`${alt} - ${leftLabel}`}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Right Image (Winter) - clipped */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={rightImage}
          alt={`${alt} - ${rightLabel}`}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg
            className="w-4 h-4 text-ink"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-medium">
        {leftLabel}
      </div>
      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-medium">
        {rightLabel}
      </div>
    </div>
  );
}
