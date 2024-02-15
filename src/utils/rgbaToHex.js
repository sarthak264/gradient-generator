const rgbaToHex = (rgba) => {
  let [r, g, b, a] = rgba;

  if (a === 0) {
    return '#00000000'; // Transparent
  }

  r = r.toString(16).padStart(2, '0');
  g = g.toString(16).padStart(2, '0');
  b = b.toString(16).padStart(2, '0');

  return `#${r}${g}${b}`;
};

export default rgbaToHex;
