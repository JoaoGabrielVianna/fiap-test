import React, { useState, useEffect } from "react";

const TextTyper = ({ text = "", interval = 100, delay = 0, Markup = "span", className }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let typingTimer;
    let typingIndex = 0;
    let typing = "";

    const typingAnimation = () => {
      typingTimer = setTimeout(() => {
        typing += text[typingIndex];
        setTypedText(typing);
        typingIndex++;

        if (typingIndex < text.length) {
          typingAnimation();
        }
      }, interval);
    };

    typingAnimation();

    return () => clearTimeout(typingTimer);
  }, [text, interval]);

  return (
    <Markup>
      <h1 className={`${className} typing`}>{typedText}</h1>
    </Markup>
  );
};

export default TextTyper;
