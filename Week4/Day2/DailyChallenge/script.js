function wordFrame() {
    const words = prompt("Enter several words separated by commas: ")
      .split(",")
      .map((word) => word.trim());
    const longestWordLength = Math.max(...words.map((word) => word.length));
    const frameWidth = longestWordLength + 4;
    const topLine = "*".repeat(frameWidth);
    const bottomLine = topLine;
    console.log(topLine);
    words.forEach((word) => {
      const paddingLength = Math.floor((frameWidth - word.length) / 2);
      const padding = " ".repeat(paddingLength);
      console.log(`*${padding}${word}${padding}*`);
    });
    console.log(bottomLine);
  }
  wordFrame();







