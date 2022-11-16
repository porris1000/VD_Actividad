// Import stylesheets
import './style.css';

var data = [
  { year: 1991, name: 'Alemania', value: 15 },
  { year: 1992, name: 'alpha', value: 34 },
  { year: 1991, name: 'alpha2', value: 17 },
  { year: 1992, name: 'alpha2', value: 65 },
  { year: 1991, name: 'beta', value: 10 },
  { year: 1992, name: 'beta', value: 10 },
  { year: 1991, name: 'beta2', value: 40 },
  { year: 1992, name: 'beta2', value: 38 },
  { year: 1991, name: 'gamma', value: 5 },
  { year: 1992, name: 'gamma', value: 10 },
  { year: 1991, name: 'gamma2', value: 20 },
  { year: 1992, name: 'gamma2', value: 34 },
  { year: 1991, name: 'delta', value: 50 },
  { year: 1992, name: 'delta', value: 43 },
  { year: 1991, name: 'delta2', value: 17 },
  { year: 1992, name: 'delta2', value: 35 },
];

var data1 = [
  { name: 'Alemania', value: 15 },
  { name: 'alpha', value: 34 },
  { name: 'alpha2', value: 17 },
  { name: 'alpha2', value: 65 },
  { name: 'beta', value: 10 },
  { name: 'beta', value: 10 },
  { name: 'beta2', value: 40 },
  { name: 'beta2', value: 38 },
  { name: 'gamma', value: 5 },
  { name: 'gamma', value: 10 },
  { name: 'gamma2', value: 20 },
  { name: 'gamma2', value: 34 },
  { name: 'delta', value: 50 },
  { name: 'delta', value: 43 },
  { name: 'delta2', value: 17 },
  { name: 'delta2', value: 35 },
];

var visualization = d3plus
  .viz()
  .container('#viz1')
  .data(data)
  .type('bar')
  .id('name')
  .x('name')
  .y('value')
  .draw();
