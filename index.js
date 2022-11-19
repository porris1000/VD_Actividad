// Import stylesheets
import './style.css';

var data1 = [
  { name: 'index', country: 'India', index: 0.629, group: 4 },
  { name: 'index', country: 'Arabia Saudita', index: 0.636, group: 0 },
  { name: 'index', country: 'Turquía', index: 0.639, group: 0 },
  { name: 'index', country: 'Japón', index: 0.65, group: 0 },
  { name: 'index', country: 'China', index: 0.682, group: 1 },
  { name: 'index', country: 'Corea del Sur', index: 0.689, group: 1 },
  { name: 'index', country: 'Brasil', index: 0.696, group: 1 },
  { name: 'index', country: 'Indonesia', index: 0.697, group: 1 },
  { name: 'index', country: 'Italia', index: 0.72, group: 2 },
  { name: 'index', country: 'Australia', index: 0.738, group: 2 },
  { name: 'index', country: 'Argentina', index: 0.756, group: 3 },
  { name: 'index', country: 'México', index: 0.764, group: 3 },
  { name: 'index', country: 'Estados Unidos', index: 0.769, group: 3 },
  { name: 'index', country: 'Canadá', index: 0.772, group: 3 },
  { name: 'index', country: 'Reino Unido', index: 0.78, group: 3 },
  { name: 'index', country: 'Sudáfrica', index: 0.782, group: 3 },
  { name: 'index', country: 'España', index: 0.788, group: 3 },
  { name: 'index', country: 'Francia', index: 0.791, group: 3 },
  { name: 'index', country: 'Alemania', index: 0.801, group: 3 },
];

var visualization = d3plus
  .viz()
  .container('#viz1')
  .data(data1)
  .type('bar')
  .id('country')
  .x('country')
  .y('index')
  .sort((a, b) => a['ID Travel Time'] - b['ID Travel Time'])
  .color('index')
  .draw();

var lines = [
  { name: 'spain', year: 2006, index: 0.7319 },
  { name: 'spain', year: 2007, index: 0.7444 },
  { name: 'spain', year: 2008, index: 0.7281 },
  { name: 'spain', year: 2009, index: 0.7345 },
  { name: 'spain', year: 2010, index: 0.7554 },
  { name: 'spain', year: 2011, index: 0.758 },
  { name: 'spain', year: 2012, index: 0.7266 },
  { name: 'spain', year: 2013, index: 0.7266 },
  { name: 'spain', year: 2014, index: 0.7325 },
  { name: 'spain', year: 2015, index: 0.742 },
  { name: 'spain', year: 2016, index: 0.7384 },
  { name: 'spain', year: 2017, index: 0.746 },
  { name: 'spain', year: 2018, index: 0.746 },
  { name: 'spain', year: 2019, index: 0.7705 },
  { name: 'spain', year: 2020, index: 0.795 },
  { name: 'spain', year: 2021, index: 0.788 },
  { name: 'spain', year: 2022, index: 0.788 },
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

var visualization = d3plus
  .viz()
  .container('#viz2')
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