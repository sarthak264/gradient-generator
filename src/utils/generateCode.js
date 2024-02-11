import generateGradientString from './generateGradient';

const generateCode = (type, rotation, stopsArr) => {
  const gradient = generateGradientString(type, rotation, stopsArr);
  const code = `background: ${
    stopsArr[0].color
  };\nbackground: ${gradient};\nbackground: -moz-${gradient};\nbackground: -webkit-${gradient};\nfilter: progid: DXImageTransform.Microsoft.gradient( startColorstr="${
    stopsArr[0].color
  }", endColorstr="${stopsArr[stopsArr.length - 1].color}", GradientType=1 );`;

  return code;
};

export default generateCode;
