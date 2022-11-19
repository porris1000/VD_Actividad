// Import stylesheets
import './style.css';

var lines = [
  { name: 'índice', year: 2006, index: 0.7319 },
  { name: 'índice', year: 2007, index: 0.7444 },
  { name: 'índice', year: 2008, index: 0.7281 },
  { name: 'índice', year: 2009, index: 0.7345 },
  { name: 'índice', year: 2010, index: 0.7554 },
  { name: 'índice', year: 2011, index: 0.758 },
  { name: 'índice', year: 2012, index: 0.7266 },
  { name: 'índice', year: 2013, index: 0.7266 },
  { name: 'índice', year: 2014, index: 0.7325 },
  { name: 'índice', year: 2015, index: 0.742 },
  { name: 'índice', year: 2016, index: 0.7384 },
  { name: 'índice', year: 2017, index: 0.746 },
  { name: 'índice', year: 2018, index: 0.746 },
  { name: 'índice', year: 2019, index: 0.7705 },
  { name: 'índice', year: 2020, index: 0.795 },
  { name: 'índice', year: 2021, index: 0.788 },
  { name: 'índice', year: 2022, index: 0.788 },
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
  .title('España: Evolución del Índice de Brecha de Género')
  .draw();

var estimate = [
  { name: 'índice', year: 2006, index: 0.7319 },
  { name: 'índice', year: 2007, index: 0.7444 },
  { name: 'índice', year: 2008, index: 0.7281 },
  { name: 'índice', year: 2009, index: 0.7345 },
  { name: 'índice', year: 2010, index: 0.7554 },
  { name: 'índice', year: 2011, index: 0.758 },
  { name: 'índice', year: 2012, index: 0.7266 },
  { name: 'índice', year: 2013, index: 0.7266 },
  { name: 'índice', year: 2014, index: 0.7325 },
  { name: 'índice', year: 2015, index: 0.742 },
  { name: 'índice', year: 2016, index: 0.7384 },
  { name: 'índice', year: 2017, index: 0.746 },
  { name: 'índice', year: 2018, index: 0.746 },
  { name: 'índice', year: 2019, index: 0.7705 },
  { name: 'índice', year: 2020, index: 0.795 },
  { name: 'índice', year: 2021, index: 0.788 },
  { name: 'índice', year: 2022, index: 0.788 },
  { name: 'estimación', year: 2006, index: 73.19 },
  { name: 'estimación', year: 2007, index: 73.54 },
  { name: 'estimación', year: 2008, index: 73.89 },
  { name: 'estimación', year: 2009, index: 74.24 },
  { name: 'estimación', year: 2010, index: 74.59 },
  { name: 'estimación', year: 2011, index: 74.94 },
  { name: 'estimación', year: 2012, index: 75.29 },
  { name: 'estimación', year: 2013, index: 75.64 },
  { name: 'estimación', year: 2014, index: 76.0 },
  { name: 'estimación', year: 2015, index: 76.35 },
  { name: 'estimación', year: 2016, index: 76.7 },
  { name: 'estimación', year: 2017, index: 77.05 },
  { name: 'estimación', year: 2018, index: 77.4 },
  { name: 'estimación', year: 2019, index: 77.75 },
  { name: 'estimación', year: 2020, index: 78.1 },
  { name: 'estimación', year: 2021, index: 78.45 },
  { name: 'estimación', year: 2022, index: 78.8 },
  { name: 'estimación', year: 2023, index: 79.15 },
  { name: 'estimación', year: 2024, index: 79.5 },
  { name: 'estimación', year: 2025, index: 79.85 },
  { name: 'estimación', year: 2026, index: 80.2 },
  { name: 'estimación', year: 2027, index: 80.55 },
  { name: 'estimación', year: 2028, index: 80.9 },
  { name: 'estimación', year: 2029, index: 81.25 },
  { name: 'estimación', year: 2030, index: 81.61 },
  { name: 'estimación', year: 2031, index: 81.96 },
  { name: 'estimación', year: 2032, index: 82.31 },
  { name: 'estimación', year: 2033, index: 82.66 },
  { name: 'estimación', year: 2034, index: 83.01 },
  { name: 'estimación', year: 2035, index: 83.36 },
  { name: 'estimación', year: 2036, index: 83.71 },
  { name: 'estimación', year: 2037, index: 84.06 },
  { name: 'estimación', year: 2038, index: 84.41 },
  { name: 'estimación', year: 2039, index: 84.76 },
  { name: 'estimación', year: 2040, index: 85.11 },
  { name: 'estimación', year: 2041, index: 85.46 },
  { name: 'estimación', year: 2042, index: 85.81 },
  { name: 'estimación', year: 2043, index: 86.16 },
  { name: 'estimación', year: 2044, index: 86.51 },
  { name: 'estimación', year: 2045, index: 86.86 },
  { name: 'estimación', year: 2046, index: 87.22 },
  { name: 'estimación', year: 2047, index: 87.57 },
  { name: 'estimación', year: 2048, index: 87.92 },
  { name: 'estimación', year: 2049, index: 88.27 },
  { name: 'estimación', year: 2050, index: 88.62 },
  { name: 'estimación', year: 2051, index: 88.97 },
  { name: 'estimación', year: 2052, index: 89.32 },
  { name: 'estimación', year: 2053, index: 89.67 },
  { name: 'estimación', year: 2054, index: 90.02 },
  { name: 'estimación', year: 2055, index: 90.37 },
  { name: 'estimación', year: 2056, index: 90.72 },
  { name: 'estimación', year: 2057, index: 91.07 },
  { name: 'estimación', year: 2058, index: 91.42 },
  { name: 'estimación', year: 2059, index: 91.77 },
  { name: 'estimación', year: 2060, index: 92.12 },
  { name: 'estimación', year: 2061, index: 92.47 },
  { name: 'estimación', year: 2062, index: 92.83 },
  { name: 'estimación', year: 2063, index: 93.18 },
  { name: 'estimación', year: 2064, index: 93.53 },
  { name: 'estimación', year: 2065, index: 93.88 },
  { name: 'estimación', year: 2066, index: 94.23 },
  { name: 'estimación', year: 2067, index: 94.58 },
  { name: 'estimación', year: 2068, index: 94.93 },
  { name: 'estimación', year: 2069, index: 95.28 },
  { name: 'estimación', year: 2070, index: 95.63 },
  { name: 'estimación', year: 2071, index: 95.98 },
  { name: 'estimación', year: 2072, index: 96.33 },
  { name: 'estimación', year: 2073, index: 96.68 },
  { name: 'estimación', year: 2074, index: 97.03 },
  { name: 'estimación', year: 2075, index: 97.38 },
  { name: 'estimación', year: 2076, index: 97.73 },
  { name: 'estimación', year: 2077, index: 98.08 },
  { name: 'estimación', year: 2078, index: 98.44 },
  { name: 'estimación', year: 2079, index: 98.79 },
  { name: 'estimación', year: 2080, index: 99.14 },
  { name: 'estimación', year: 2081, index: 99.49 },
  { name: 'estimación', year: 2082, index: 99.84 },
  { name: 'estimación', year: 2083, index: 100.19 },
];
var visualization = d3plus
  .viz()
  .container('#viz2')
  .data(estimate)
  .type('line')
  .shape({ Line: { strokeWidth: 5 } })
  .id('name')
  .x('year')
  .y('index')
  .y({ range: [0.7, 0.8] })
  .y({ scale: 'share' })
  .title('España: Evolución del Índice de Brecha de Género')
  .draw();
