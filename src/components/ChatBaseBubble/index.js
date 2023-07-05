import React from "react";
import useScript from "../../hooks/useScript";

export default function ChatBaseBubble() {
  useScript(require("@site/static/chatbase.js").default);
  return null;
}
