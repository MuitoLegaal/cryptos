export function formatNumberWithDecimals(number){
  var num = parseFloat(number)
  var roundedString = num.toFixed(2)
  return roundedString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatNumberNoDecimal(number){
  var num = parseFloat(number)
  var roundedString = num.toFixed(0)
  return roundedString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}