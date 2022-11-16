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
  .sort('index')
  .type('bar')
  .id('country')
  .x('index')
  .y('index')
  .color('index')
  .xaxis('country')
  .draw();
