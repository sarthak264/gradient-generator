const randomGradient = () => {
  function getRandomHexColor() {
    const randomInt = Math.floor(Math.random() * 16777216);
    const hexColor = randomInt.toString(16).padStart(6, '0');
    return `#${hexColor}`;
  }

  const randomColor1 = getRandomHexColor();
  const randomColor2 = getRandomHexColor();
  const newArr = [
    { color: randomColor1, position: 0 },
    { color: randomColor2, position: 1 },
  ];

  return newArr;
};

export default randomGradient;
