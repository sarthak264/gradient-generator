import hexToRgba from './hexToRgba';
import rgbaToHex from './rgbaToHex';

const calculateColorAtPosition = (stopsArr, position) => {
  stopsArr.sort((a, b) => a.position - b.position);

  let startIndex = 0;
  let endIndex = stopsArr.length - 1;
  for (let i = 0; i < stopsArr.length - 1; i++) {
    if (
      position >= stopsArr[i].position &&
      position <= stopsArr[i + 1].position
    ) {
      startIndex = i;
      endIndex = i + 1;
      break;
    }
  }

  const startColor = Array.isArray(stopsArr[startIndex].color)
    ? stopsArr[startIndex].color
    : hexToRgba(stopsArr[startIndex].color);
  const endColor = Array.isArray(stopsArr[endIndex].color)
    ? stopsArr[endIndex].color
    : hexToRgba(stopsArr[endIndex].color);
  const startPosition = stopsArr[startIndex].position;
  const endPosition = stopsArr[endIndex].position;

  const interpolatedColor = startColor.map((channel, index) => {
    const startChannel = startColor[index];
    const endChannel = endColor[index];
    const ratio = (position - startPosition) / (endPosition - startPosition);
    return Math.round((1 - ratio) * startChannel + ratio * endChannel);
  });

  return rgbaToHex(interpolatedColor);
};

export default calculateColorAtPosition;
