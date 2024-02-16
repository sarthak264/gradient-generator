const generateGradientString = (type, rotation, stopsArr) => {
  const gradientType =
    type === 'Radial' ? 'radial-gradient' : 'linear-gradient';
  const gradientDirection = type === 'Radial' ? 'circle' : rotation;
  const stopsString = stopsArr
    .map((stop) => `${stop.color} ${Math.round(stop.position * 100)}%`)
    .join(', ');

  return `${gradientType}(${gradientDirection}${
    type === 'Radial' ? '' : 'deg'
  }, ${stopsString})`;
};

export default generateGradientString;
