import React from "react";
import { appDesign, graphicDesign, webDesign } from "../../projects";

export default function DesignPage({ title }) {
  const items = [
    {
      title: "Web Design",
      description:
        "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
      projects: webDesign,
    },

    {
      title: "App Design",
      description:
        "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
      projects: appDesign,
    },
    {
      title: "Graphic Design",
      description:
        "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
      projects: graphicDesign,
    },
  ];

  const data = items.filter((item) => item.title === title)[0];
  return <div>{data.description}</div>;
}
