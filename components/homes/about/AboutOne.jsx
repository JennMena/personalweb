"use client";

import React, { useEffect, useState } from "react";
import { hackathons } from "@/data/hackathons";

import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { items } from "@/data/jobFeatures";
import { bioData } from "@/data/bioData";
import Image from "next/image";

import { ReactTyped } from "react-typed";

export default function AboutOne() {
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);
  return (
    <div className="col-xxl-8 col-xl-9">
      <div className="bostami-page-content-wrap">
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="bostami-page-title-wrap mb-15">
            <h2 className="page-title-home">
              <ReactTyped
                strings={bioData.strings}
                typeSpeed={30}
                backSpeed={30}
                showCursor={true}
              />
            </h2>
            <p>{bioData.descOne} <i><a href="https://negocioefectivo.com/" target="_blank">Mi Negocio Efectivo</a></i>.</p>
            <p>{bioData.descTwo}</p>
          </div>
        </div>

        <div className="section-wrapper pl-60 pr-60">
          <div className="bostami-section-title-wrap mb-30">
            <h4 className="section-title-home">Welcome to my web corner!</h4>
            <p>{bioData.introActivities}</p>
          </div>

          <div className="bostami-what-do-wrap mb-30">
            <div className="row">
              {items.slice(0, 4).map((elm, i) => (
                <div key={i} className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className={`bostami-what-do-item ${elm.bg} `}>
                    <div className="icon" style={{ margin: "0 auto" }}>
                      <Image
                        height={40}
                        width={130}
                        style={{ margin: "0 auto" }}
                        src={elm.icon}
                        alt="feature"
                      />
                    </div>
                    <div className="text">
                      <h4 className="title">{elm.title}</h4>
                      <p>{elm.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*
        <div className="section-wrapper bg-light-white-2 pt-45 pb-60 pl-60 pr-60">
          <div className="bostami-section-title-wrap text-center mb-50">
            <h3 className="section-title">Hackathons</h3>
            <p>I'm new to hackathons and have participated in one so far, but I'll join many more. Stay tuned as this section grows!</p>
          </div>

          <div className="bostami-client-slider">
            <div className="swiper-container client_slide_active">
              {showSlider && (
                <Swiper
                  // {...setting}
                  modules={[Navigation, Pagination, Autoplay]}
                  // loop={true}
                  spaceBetween={30}
                  slidesPerView={2}
                  //loop={true}
                  autoplay={{
                    delay: 3000, // Time between each slide (in milliseconds)
                    disableOnInteraction: false, // Set to false if you want the auto slider to continue even when the user interacts with the slider (e.g., clicking on a slide).
                  }}
                  breakpoints={{
                    // when window width is >= 576px
                    450: {
                      slidesPerView: 3,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 4,
                    },
                    1200: {
                      // when window width is >= 992px
                      slidesPerView: 5,
                    },
                  }}
                >
                  {hackathons.map((elm, i) => (
                    <SwiperSlide key={i}>
                      <div className="swiper-slide">
                        <Image
                          height={62}
                          width={264}
                          style={{ height: '62px', width: 'fit-content' }}
                          className="bostami-client-slider-logo"
                          src={elm.imgSrc}
                          alt="hackathon logo"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </div>
        */}

        <div className="footer-copyright text-center bg-light-white-2 pt-25 pb-25">
          <span>
            © {new Date().getFullYear()} Crafted with 🤓 and ☕ by Jenn.
          </span>
        </div>
      </div>
    </div>
  );
}
