// Import stylesheets
import './style.css';

var data1 = [
  { name: 'index', country: 'India', index: 0.629 },
  { name: 'index', country: 'Arabia Saudita', index: 0.636 },
  { name: 'index', country: 'Turquía', index: 0.639 },
  { name: 'index', country: 'Japón', index: 0.65 },
  { name: 'index', country: 'China', index: 0.682 },
  { name: 'index', country: 'Corea del Sur', index: 0.689 },
  { name: 'index', country: 'Brasil', index: 0.696 },
  { name: 'index', country: 'Indonesia', index: 0.697 },
  { name: 'index', country: 'Italia', index: 0.72 },
  { name: 'index', country: 'Australia', index: 0.738 },
  { name: 'index', country: 'Argentina', index: 0.756 },
  { name: 'index', country: 'México', index: 0.764 },
  { name: 'index', country: 'Estados Unidos', index: 0.769 },
  { name: 'index', country: 'Canadá', index: 0.772 },
  { name: 'index', country: 'Reino Unido', index: 0.78 },
  { name: 'index', country: 'Sudáfrica', index: 0.782 },
  { name: 'index', country: 'España', index: 0.788 },
  { name: 'index', country: 'Francia', index: 0.791 },
  { name: 'index', country: 'Alemania', index: 0.801 },
];

var visualization = d3plus
  .viz()
  .container('#viz1')
  .data(data1)
  .type('bar')
  .id('name')
  .x('country')
  .y('index')
  .draw();
