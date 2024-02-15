const hexToRgba = (hex) => {
  if (!hex.startsWith('#')) {
    throw new Error('Invalid hex color format. Hex color must start with #');
  }

  hex = hex.slice(1);

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return [r, g, b];
};

export default hexToRgba;
