import React from "react";
import Admonition from "@theme-original/Admonition";
import MyIcon from "@site/static/img/home-logo.svg";

export default function AdmonitionWrapper(props) {
  if (props.type !== "info") {
    return <Admonition {...props} />;
  }
  // info has a different icon, for a TASK
  return <Admonition icon={<MyIcon />} {...props} />;
}
