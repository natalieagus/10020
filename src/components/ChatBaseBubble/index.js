import React from "react";
import useScriptChatbase from "../../hooks/useScriptChatbase";
import BrowserOnly from "@docusaurus/BrowserOnly";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

export default function ChatBaseBubble() {
  let url = "";
  const canUseDOM = ExecutionEnvironment.canUseDOM;
  if (canUseDOM) {
    url = require("@site/static/chatbase.js").default;
    console.log("url", url);
  }
  useScriptChatbase(url, canUseDOM);

  return <BrowserOnly>{() => <div></div>}</BrowserOnly>;
}
