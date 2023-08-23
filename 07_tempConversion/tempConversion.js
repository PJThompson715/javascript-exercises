const convertToCelsius = function(temp) 
{
  let c=(temp-32)*5/9;
  c=Math.round(c * 10)/10
  return c;
};

const convertToFahrenheit = function(temp) 
{
  let f=(temp*1.8)+32;
  f=Math.round(f*10)/10;
  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
