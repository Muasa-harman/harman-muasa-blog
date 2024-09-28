"use client";

import React, { useEffect } from "react";

const GistEmbed = () => {
  useEffect(() => {
    const gistContainer = document.getElementById("gist-container");
    
    if (gistContainer) {
      // Create the script tag for the Gist
      const script = document.createElement("script");
      script.src =
        "https://gist.github.com/Muasa-harman/f867f78af89247ab16d6d2781865582a.js";
      script.async = true;

      gistContainer.appendChild(script);

      // Cleanup the Gist content when the component unmounts
      return () => {
        gistContainer.innerHTML = "";
      };
    }
  }, []);

  return (
    <div>
      <h3>Embedded Gist in React</h3>
      <div id="gist-container"></div>
    </div>
  );
};

export default GistEmbed;
