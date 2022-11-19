// Import stylesheets
import './style.css';

var data1 = [
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

var data2 = [
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
  { name: 'Estimación', year: 2022, index: 0.788 },
  { name: 'Estimación', year: 2023, index: 0.7915 },
  { name: 'Estimación', year: 2024, index: 0.795 },
  { name: 'Estimación', year: 2025, index: 0.7985 },
  { name: 'Estimación', year: 2026, index: 0.802 },
  { name: 'Estimación', year: 2027, index: 0.8055 },
  { name: 'Estimación', year: 2028, index: 0.809 },
  { name: 'Estimación', year: 2029, index: 0.8125 },
  { name: 'Estimación', year: 2030, index: 0.8161 },
  { name: 'Estimación', year: 2031, index: 0.8196 },
  { name: 'Estimación', year: 2032, index: 0.8231 },
  { name: 'Estimación', year: 2033, index: 0.8266 },
  { name: 'Estimación', year: 2034, index: 0.8301 },
  { name: 'Estimación', year: 2035, index: 0.8336 },
  { name: 'Estimación', year: 2036, index: 0.8371 },
  { name: 'Estimación', year: 2037, index: 0.8406 },
  { name: 'Estimación', year: 2038, index: 0.8441 },
  { name: 'Estimación', year: 2039, index: 0.8476 },
  { name: 'Estimación', year: 2040, index: 0.8511 },
  { name: 'Estimación', year: 2041, index: 0.8546 },
  { name: 'Estimación', year: 2042, index: 0.8581 },
  { name: 'Estimación', year: 2043, index: 0.8616 },
  { name: 'Estimación', year: 2044, index: 0.8651 },
  { name: 'Estimación', year: 2045, index: 0.8686 },
  { name: 'Estimación', year: 2046, index: 0.8722 },
  { name: 'Estimación', year: 2047, index: 0.8757 },
  { name: 'Estimación', year: 2048, index: 0.8792 },
  { name: 'Estimación', year: 2049, index: 0.8827 },
  { name: 'Estimación', year: 2050, index: 0.8862 },
  { name: 'Estimación', year: 2051, index: 0.8897 },
  { name: 'Estimación', year: 2052, index: 0.8932 },
  { name: 'Estimación', year: 2053, index: 0.8967 },
  { name: 'Estimación', year: 2054, index: 0.9002 },
  { name: 'Estimación', year: 2055, index: 0.9037 },
  { name: 'Estimación', year: 2056, index: 0.9072 },
  { name: 'Estimación', year: 2057, index: 0.9107 },
  { name: 'Estimación', year: 2058, index: 0.9142 },
  { name: 'Estimación', year: 2059, index: 0.9177 },
  { name: 'Estimación', year: 2060, index: 0.9212 },
  { name: 'Estimación', year: 2061, index: 0.9247 },
  { name: 'Estimación', year: 2062, index: 0.9283 },
  { name: 'Estimación', year: 2063, index: 0.9318 },
  { name: 'Estimación', year: 2064, index: 0.9353 },
  { name: 'Estimación', year: 2065, index: 0.9388 },
  { name: 'Estimación', year: 2066, index: 0.9423 },
  { name: 'Estimación', year: 2067, index: 0.9458 },
  { name: 'Estimación', year: 2068, index: 0.9493 },
  { name: 'Estimación', year: 2069, index: 0.9528 },
  { name: 'Estimación', year: 2070, index: 0.9563 },
  { name: 'Estimación', year: 2071, index: 0.9598 },
  { name: 'Estimación', year: 2072, index: 0.9633 },
  { name: 'Estimación', year: 2073, index: 0.9668 },
  { name: 'Estimación', year: 2074, index: 0.9703 },
  { name: 'Estimación', year: 2075, index: 0.9738 },
  { name: 'Estimación', year: 2076, index: 0.9773 },
  { name: 'Estimación', year: 2077, index: 0.9808 },
  { name: 'Estimación', year: 2078, index: 0.9844 },
  { name: 'Estimación', year: 2079, index: 0.9879 },
  { name: 'Estimación', year: 2080, index: 0.9914 },
  { name: 'Estimación', year: 2081, index: 0.9949 },
  { name: 'Estimación', year: 2082, index: 0.9984 },
  { name: 'Estimación', year: 2083, index: 1.0019 },
];

var attributes = [
  { name: 'España', hex: '#89cb0c' },
  { name: 'Estimación', hex: '#109618' },
];

var visualization = d3plus
  .viz()
  .container('#viz1')
  .data(data1)
  .data({ stroke: { width: 3 } })
  .type('line')
  .id('name')
  .x('year')
  .x({ label: 'Año' })
  .y('index')
  .y({ range: [0.7, 0.8] })
  .y({ scale: 'share' })
  .y({ label: 'Índice Global de Brecha de Género' })
  .title('España: Evolución del Índice de Brecha de Género')
  .title({
    sub: 'Chart: Ana Porras, Source: Expansión Datos Macro, Created with D3plus',
  })
  .legend(false)
  .attrs(attributes)
  .color('hex')
  .draw();

var visualization = d3plus
  .viz()
  .container('#viz2')
  .data(data2)
  .data({ stroke: { width: 3 } })
  .type('line')
  .id('name')
  .x('year')
  .x({ label: 'Año' })
  .y('index')
  .y({ range: [0.7, 1] })
  .y({ scale: 'share' })
  .y({ label: 'Índice Global de Brecha de Género' })
  .title('España: Estimación del cierre de la Brecha de Género')
  .title({
    sub: 'Chart: Ana Porras, Source: Expansión Datos Macro, Created with D3plus',
  })
  .legend(false)
  .attrs(attributes)
  .color('hex')
  .draw();
//trama, xticks
