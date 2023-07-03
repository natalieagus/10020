import Details from "@theme/Details";
import React from "react";

const SummaryHeader = ({ title }) => {
  return (
    <summary style={{ "font-weight": "bold" }}>
      {title ? title : "Deep Dive"}
    </summary>
  );
};
export default function DeepDive({ children, title }) {
  return (
    <Details summary={<SummaryHeader title={title} />}>{children}</Details>
  );
}
