export function formatNumber(number){
  var num = parseFloat(number)
  var roundedString = num.toFixed(2)
  return roundedString.replace(".", ",")
}