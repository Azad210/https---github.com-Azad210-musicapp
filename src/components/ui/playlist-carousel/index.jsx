"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import Image from "next/image";
import "./playlist-carousel.scss";

export default function PlaylistCarousel({ playlists }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="playlist-carousel-wrapper">
      <Swiper
        	slidesPerView={3}
			centeredSlides={true}
			className="w-full"
			onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
			loop={true}
      >
        {playlists.map((playlist, index) => (
          <SwiperSlide key={playlist.id}>
            <div className={`playlist-slide ${index === activeIndex ? "active" : ""}`}>
              <Image
                src={playlist.images?.[0]?.url || "/placeholder.png"}
                width={70}
                height={70}
                alt={playlist.name}
                className="playlist-image"
              />
              <span className="playlist-name">{playlist.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
