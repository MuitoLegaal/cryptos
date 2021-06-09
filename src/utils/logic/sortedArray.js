export function sortByName(data){
  return data.sort((a, b) => a.name.localeCompare(b.name))
}

export function sortByPrice(data){
  return data.sort((a, b) => a.price - b.price)
}

export function sortBy24h(data){
  return data.sort((a, b) => a.percent_change_24h - b.percent_change_24h)
}

export function sortBy7d(data){
  return data.sort((a, b) => a.percent_change_7d - b.percent_change_7d)
}

export function sortByMarketCap(data){
  return data.sort((a, b) => a.market_cap - b.market_cap)
}

export function sortByVolume(data){
  return data.sort((a, b) => a.volume_24h - b.volume_24h)
}

export function sortBySupply(data){
  return data.sort((a, b) => a.circulating_supply - b.circulating_supply)
}