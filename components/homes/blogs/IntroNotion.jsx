"use client";

import React, { useEffect, useState } from "react";
import { notion } from "@/data/notion";
import Image from "next/image";

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
            <h2 className="page-title">My Learning Log!</h2>
            <p>{notion.descOne}</p>
          </div>
        </div>

      <br></br>
        <div className="section-wrapper pl-60 pr-60">

          <div className="bostami-what-do-wrap mb-30">
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12">
                <div className={`bostami-what-do-item bg-catkrill`}>
                  <div className="icon" style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Image
                      height={120}
                      width={120}
                      src={`/assets/img/apps-notion.svg`}
                      alt="Notion"
                      style={{marginLeft: "20px"}}
                    />
                  </div>
                  <div className="text text-center" style={{display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "20px"}}>
                    <h4 className="title text-center"><a href="https://jmena.notion.site/" target="_blank">Jennifer's Learning Log</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center bg-light-white-2 pt-25 pb-25">
          <span>
            © {new Date().getFullYear()} Crafted with 🤓 and ☕ by Jenn using the Elite-Themes24 template.
          </span>
        </div>
      </div>
    </div>
  );
}
