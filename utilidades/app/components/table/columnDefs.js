function formateoFecha(value){
  var vFecha = value.substring(0,10);
  return  vFecha.substring(8,10) + '/' + vFecha.substring(5,7) + '/' + vFecha.substring(0,4);
}

function formatoMoneda(value){
  var decimals = 2;
  var separators = ['.', "'", ','];
  var number = (parseFloat(value) || 0).toFixed(decimals);
  if (number.length <= (4 + decimals))
      return number.replace('.', separators[separators.length - 1]);
  var parts = number.split(/[-.]/);
  value = parts[parts.length > 1 ? parts.length - 2 : 0];
  var result = value.substr(value.length - 3, 3) + (parts.length > 1 ?
      separators[separators.length - 1] + parts[parts.length - 1] : '');
  var start = value.length - 6;
  var idx = 0;
  while (start > -3) {
      result = (start > 0 ? value.substr(start, 3) : value.substr(0, 3 + start))
          + separators[idx] + result;
      idx = (++idx) % 2;
      start -= 3;
  }
  return (parts.length == 3 ? '-' : '') + result;
}

export default [
  {
    title: 'Fecha',
    dataIndex: 'Fecha',
    width: 90,
    render: formateoFecha
  },
  {
    title: 'Principal',
    dataIndex: 'principal',
    width: 80,
    render: formatoMoneda
  },
  {
    title: 'Intereses',
    dataIndex: 'intereses',
    width: 80,
    render: formatoMoneda
  },
  {
    title: 'TOTAL',
    dataIndex: 'Total',
    width: 90,
    render: formatoMoneda
  },
];