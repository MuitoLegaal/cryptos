export function sortByRank(data){
  return data.sort((a, b) => a.cmc_rank - b.cmc_rank)
}

export function sortByName(data){
  return data.sort((a, b) => a.name.localeCompare(b.name))
}

export function sortByPriceEUR(data){
  return data.sort((a, b) => a.quote.EUR.price - b.quote.EUR.price)
}

export function sortByPriceUSD(data){
  return data.sort((a, b) => a.quote.USD.price - b.quote.USD.price)
}

export function sortByPriceGBP(data){
  return data.sort((a, b) => a.quote.GBP.price - b.quote.GBP.price)
}

export function sortBy24hEUR(data){
  return data.sort((a, b) => a.quote.EUR.percent_change_24h - b.quote.EUR.percent_change_24h)
}

export function sortBy24hGBP(data){
  return data.sort((a, b) => a.quote.GBP.percent_change_24h - b.quote.GBP.percent_change_24h)
}

export function sortBy24hUSD(data){
  return data.sort((a, b) => a.quote.USD.percent_change_24h - b.quote.USD.percent_change_24h)
}

export function sortBy7dEUR(data){
  return data.sort((a, b) => a.quote.EUR.percent_change_7d - b.quote.EUR.percent_change_7d)
}

export function sortBy7dUSD(data){
  return data.sort((a, b) => a.quote.USD.percent_change_7d - b.quote.USD.percent_change_7d)
}

export function sortBy7dGBP(data){
  return data.sort((a, b) => a.quote.GBP.percent_change_7d - b.quote.GBP.percent_change_7d)
}

export function sortByMarketCapEUR(data){
  return data.sort((a, b) => a.quote.EUR.market_cap - b.quote.EUR.market_cap)
}

export function sortByMarketCapUSD(data){
  return data.sort((a, b) => a.quote.USD.market_cap - b.quote.USD.market_cap)
}

export function sortByMarketCapGBP(data){
  return data.sort((a, b) => a.quote.GBP.market_cap - b.quote.GBP.market_cap)
}

export function sortByVolumeEUR(data){
  return data.sort((a, b) => a.quote.EUR.volume_24h - b.quote.EUR.volume_24h)
}

export function sortByVolumeUSD(data){
  return data.sort((a, b) => a.quote.USD.volume_24h - b.quote.USD.volume_24h)
}

export function sortByVolumeGBP(data){
  console.log(data[30].quote)
  return data.sort((a, b) => a.quote.GBP.volume_24h - b.quote.GBP.volume_24h)
}

export function sortBySupply(data){
  return data.sort((a, b) => a.circulating_supply - b.circulating_supply)
}