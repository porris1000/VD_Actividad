// Import stylesheets
import './style.css';

var lines = [
  { name: 'España', year: 2006, index: 0.7319 },
  { name: 'España', year: 2007, index: 0.7444 },
  { name: 'España', year: 2008, index: 0.7281 },
  { name: 'España', year: 2009, index: 0.7345 },
  { name: 'España', year: 2010, index: 0.7554 },
  { name: 'España', year: 2011, index: 0.758 },
  { name: 'España', year: 2012, index: 0.7266 },
  { name: 'España', year: 2013, index: 0.7266 },
  { name: 'España', year: 2014, index: 0.7325 },
  { name: 'España', year: 2015, index: 0.742 },
  { name: 'España', year: 2016, index: 0.7384 },
  { name: 'España', year: 2017, index: 0.746 },
  { name: 'España', year: 2018, index: 0.746 },
  { name: 'España', year: 2019, index: 0.7705 },
  { name: 'España', year: 2020, index: 0.795 },
  { name: 'España', year: 2021, index: 0.788 },
  { name: 'España', year: 2022, index: 0.788 },
];

var visualization = d3plus
  .viz()
  .container('#viz1')
  .data(lines)
  .type('line')
  .shape({ Line: { strokeWidth: 5 } })
  .id('name')
  .x('year')
  .y('index')
  .y({ range: [0.7, 0.8] })
  .y({ scale: 'share' })
  .title('Evolución del Índice de Brecha de Género')
  .draw();

var estimate = [
  { name: 'España', year: 2006, index: 0.7319 },
  { name: 'España', year: 2007, index: 0.7444 },
  { name: 'España', year: 2008, index: 0.7281 },
  { name: 'España', year: 2009, index: 0.7345 },
  { name: 'España', year: 2010, index: 0.7554 },
  { name: 'España', year: 2011, index: 0.758 },
  { name: 'España', year: 2012, index: 0.7266 },
  { name: 'España', year: 2013, index: 0.7266 },
  { name: 'España', year: 2014, index: 0.7325 },
  { name: 'España', year: 2015, index: 0.742 },
  { name: 'España', year: 2016, index: 0.7384 },
  { name: 'España', year: 2017, index: 0.746 },
  { name: 'España', year: 2018, index: 0.746 },
  { name: 'España', year: 2019, index: 0.7705 },
  { name: 'España', year: 2020, index: 0.795 },
  { name: 'España', year: 2021, index: 0.788 },
  { name: 'España', year: 2022, index: 0.788 },
  { name: 'estimación', year: 2006, index: 0.7319 },
  { name: 'estimación', year: 2007, index: 0.7354 },
  { name: 'estimación', year: 2008, index: 0.7389 },
  { name: 'estimación', year: 2009, index: 0.7424 },
  { name: 'estimación', year: 2010, index: 0.7459 },
  { name: 'estimación', year: 2011, index: 0.7494 },
  { name: 'estimación', year: 2012, index: 0.7529 },
  { name: 'estimación', year: 2013, index: 0.7564 },
  { name: 'estimación', year: 2014, index: 0.76 },
  { name: 'estimación', year: 2015, index: 0.7635 },
  { name: 'estimación', year: 2016, index: 0.767 },
  { name: 'estimación', year: 2017, index: 0.7705 },
  { name: 'estimación', year: 2018, index: 0.774 },
  { name: 'estimación', year: 2019, index: 0.7775 },
  { name: 'estimación', year: 2020, index: 0.781 },
  { name: 'estimación', year: 2021, index: 0.7845 },
  { name: 'estimación', year: 2022, index: 0.788 },
  { name: 'estimación', year: 2023, index: 0.7915 },
  { name: 'estimación', year: 2024, index: 0.795 },
  { name: 'estimación', year: 2025, index: 0.7985 },
  { name: 'estimación', year: 2026, index: 0.802 },
  { name: 'estimación', year: 2027, index: 0.8055 },
  { name: 'estimación', year: 2028, index: 0.809 },
  { name: 'estimación', year: 2029, index: 0.8125 },
  { name: 'estimación', year: 2030, index: 0.8161 },
  { name: 'estimación', year: 2031, index: 0.8196 },
  { name: 'estimación', year: 2032, index: 0.8231 },
  { name: 'estimación', year: 2033, index: 0.8266 },
  { name: 'estimación', year: 2034, index: 0.8301 },
  { name: 'estimación', year: 2035, index: 0.8336 },
  { name: 'estimación', year: 2036, index: 0.8371 },
  { name: 'estimación', year: 2037, index: 0.8406 },
  { name: 'estimación', year: 2038, index: 0.8441 },
  { name: 'estimación', year: 2039, index: 0.8476 },
  { name: 'estimación', year: 2040, index: 0.8511 },
  { name: 'estimación', year: 2041, index: 0.8546 },
  { name: 'estimación', year: 2042, index: 0.8581 },
  { name: 'estimación', year: 2043, index: 0.8616 },
  { name: 'estimación', year: 2044, index: 0.8651 },
  { name: 'estimación', year: 2045, index: 0.8686 },
  { name: 'estimación', year: 2046, index: 0.8722 },
  { name: 'estimación', year: 2047, index: 0.8757 },
  { name: 'estimación', year: 2048, index: 0.8792 },
  { name: 'estimación', year: 2049, index: 0.8827 },
  { name: 'estimación', year: 2050, index: 0.8862 },
  { name: 'estimación', year: 2051, index: 0.8897 },
  { name: 'estimación', year: 2052, index: 0.8932 },
  { name: 'estimación', year: 2053, index: 0.8967 },
  { name: 'estimación', year: 2054, index: 0.9002 },
  { name: 'estimación', year: 2055, index: 0.9037 },
  { name: 'estimación', year: 2056, index: 0.9072 },
  { name: 'estimación', year: 2057, index: 0.9107 },
  { name: 'estimación', year: 2058, index: 0.9142 },
  { name: 'estimación', year: 2059, index: 0.9177 },
  { name: 'estimación', year: 2060, index: 0.9212 },
  { name: 'estimación', year: 2061, index: 0.9247 },
  { name: 'estimación', year: 2062, index: 0.9283 },
  { name: 'estimación', year: 2063, index: 0.9318 },
  { name: 'estimación', year: 2064, index: 0.9353 },
  { name: 'estimación', year: 2065, index: 0.9388 },
  { name: 'estimación', year: 2066, index: 0.9423 },
  { name: 'estimación', year: 2067, index: 0.9458 },
  { name: 'estimación', year: 2068, index: 0.9493 },
  { name: 'estimación', year: 2069, index: 0.9528 },
  { name: 'estimación', year: 2070, index: 0.9563 },
  { name: 'estimación', year: 2071, index: 0.9598 },
  { name: 'estimación', year: 2072, index: 0.9633 },
  { name: 'estimación', year: 2073, index: 0.9668 },
  { name: 'estimación', year: 2074, index: 0.9703 },
  { name: 'estimación', year: 2075, index: 0.9738 },
  { name: 'estimación', year: 2076, index: 0.9773 },
  { name: 'estimación', year: 2077, index: 0.9808 },
  { name: 'estimación', year: 2078, index: 0.9844 },
  { name: 'estimación', year: 2079, index: 0.9879 },
  { name: 'estimación', year: 2080, index: 0.9914 },
  { name: 'estimación', year: 2081, index: 0.9949 },
  { name: 'estimación', year: 2082, index: 0.9984 },
  { name: 'estimación', year: 2083, index: 1.0019 },
];
var visualization = d3plus
  .viz()
  .container('#viz2')
  .data(estimate)
  .type('line')
  .id('name')
  .x('year')
  .y('index')
  .y({ range: [0.7, 1] })
  .y({ scale: 'share' })
  .legend(true)
  .title('España: Estimación del cierre de la Brecha de Género')
  .draw();
//legenda, grosor, color, trama
