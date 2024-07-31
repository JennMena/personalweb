import Header from "@/components/homes/headers/Header";
import PersonalInfo from "@/components/homes/personalInfo/PersonalInfo";

import IntroNotion from "@/components/homes/blogs/IntroNotion";
import React from "react";

import MenuTwo from "@/components/homes/menus/MenuTwo";
export const metadata = {
  title: "JennM | Notes",
  description:
    "Notes, coursework and blog posts",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper home-1" id="blog">
        <Header />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfo />
            <IntroNotion />
            <MenuTwo />
          </div>
        </div>
      </div>
    </>
  );
}
