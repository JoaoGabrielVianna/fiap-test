import React, { useState, useEffect } from "react";

const TextTyper = ({ text = "", interval = 100, delay = 0, Markup = "span", className }) => {
  const [typedText, setTypedText] = useState("");

  const typingRender = (text, updater, interval, delay) => {
    let localTypingIndex = 0;
    let localTyping = "";
    
    setTimeout(() => {
      let printer = setInterval(() => {
        if (localTypingIndex < text.length) {
          updater((localTyping += text[localTypingIndex]));
          localTypingIndex += 1;
        } else {
          localTypingIndex = 0;
          localTyping = "";
          clearInterval(printer);
        }
      }, interval);
    }, delay);
  };

  useEffect(() => {
    typingRender(text, setTypedText, interval, delay);
  }, [text, interval, delay]);

  return (
    <Markup >
      <h1 className={`${className} typing`}>{typedText}</h1>
    </Markup>
  );
};

export default TextTyper;
