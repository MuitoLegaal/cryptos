import {
  sortByName,
  sortByRank,
  sortByPriceUSD,
  sortByPriceEUR,
  sortByPriceGBP,
  sortBySupply,
  sortBy24hEUR,
  sortBy24hGBP,
  sortBy24hUSD,
  sortBy7dEUR,
  sortBy7dUSD,
  sortBy7dGBP,
  sortByMarketCapEUR,
  sortByMarketCapUSD,
  sortByMarketCapGBP,
  sortByVolumeEUR,
  sortByVolumeUSD,
  sortByVolumeGBP
} from './sortedArray';

export function sorted(sorting, searchedCoins) {

  if (searchedCoins.length > 0) {
    if (sorting === 'IndexDown') {
      return sortByRank(searchedCoins)
    }
    else if (sorting === "IndexUp") {
      return sortByRank(searchedCoins).reverse()
    }
    else if (sorting === 'NameDown') {
      return sortByName(searchedCoins).reverse()
    }
    else if (sorting === 'NameUp') {
      return sortByName(searchedCoins)
    }
    else if (sorting === 'IndexUp') {
      return sortByRank(searchedCoins).reverse()
    }
    else if (sorting === 'IndexDown') {
      return sortByRank(searchedCoins)
    }
    else if (sorting === 'PriceDown') {
      if (searchedCoins[0].quote.EUR) {
        return sortByPriceEUR(searchedCoins).reverse()
      }
      else if (searchedCoins[0].quote.USD) {
        return sortByPriceUSD(searchedCoins).reverse()
      }
      else if (searchedCoins[0].quote.GBP) {
        return sortByPriceGBP(searchedCoins).reverse()
      }
    }
    else if (sorting === 'PriceUp') {
      if (searchedCoins[0].quote.EUR) {
        return sortByPriceEUR(searchedCoins)
      }
      else if (searchedCoins[0].quote.USD) {
        return sortByPriceUSD(searchedCoins)
      }
      else if (searchedCoins[0].quote.GBP) {
        return sortByPriceGBP(searchedCoins)
      }
    }
    else if (sorting === '24hDown') {
      if (searchedCoins[0].quote.EUR) {
        return sortBy24hEUR(searchedCoins).reverse()
      }
      else if (searchedCoins[0].quote.USD) {
        return sortBy24hUSD(searchedCoins).reverse()
      }
      else if (searchedCoins[0].quote.GBP) {
        return sortBy24hGBP(searchedCoins).reverse()
      }
    }
    else if (sorting === '24hUp') {
      if (searchedCoins[0].quote.EUR) {
        return sortBy24hEUR(searchedCoins)
      }
      else if (searchedCoins[0].quote.USD) {
        return sortBy24hUSD(searchedCoins)
      }
      else if (searchedCoins[0].quote.GBP) {
        return sortBy24hGBP(searchedCoins)
      }
    }
    else if (sorting === '7dDown') {
      if (searchedCoins[0].quote.EUR) {
        return sortBy7dEUR(searchedCoins).reverse()
      }
      else if (searchedCoins[0].quote.USD) {
        return sortBy7dUSD(searchedCoins).reverse()
      }
      else if (searchedCoins[0].quote.GBP) {
        return sortBy7dGBP(searchedCoins).reverse()
      }
    }
    else if (sorting === '7dUp') {
      if (searchedCoins[0].quote.EUR) {
        return sortBy7dEUR(searchedCoins)
      }
      else if (searchedCoins[0].quote.USD) {
        return sortBy7dUSD(searchedCoins)
      }
      else if (searchedCoins[0].quote.GBP) {
        return sortBy7dGBP(searchedCoins)
      }
    }
    else if (sorting === 'MarketCapDown') {
      if (searchedCoins[0].quote.EUR) {
        return sortByMarketCapEUR(searchedCoins).reverse()
      }
      else if (searchedCoins[0].quote.USD) {
        return sortByMarketCapUSD(searchedCoins).reverse()
      }
      else if (searchedCoins[0].quote.GBP) {
        return sortByMarketCapGBP(searchedCoins).reverse()
      }
    }
    else if (sorting === 'MarketCapUp') {
      if (searchedCoins[0].quote.EUR) {
        return sortByMarketCapEUR(searchedCoins)
      }
      else if (searchedCoins[0].quote.USD) {
        return sortByMarketCapUSD(searchedCoins)
      }
      else if (searchedCoins[0].quote.GBP) {
        return sortByMarketCapGBP(searchedCoins)
      }
    }
    else if (sorting === 'VolumeDown') {
      if (searchedCoins[0].quote.EUR) {
        return sortByVolumeEUR(searchedCoins).reverse()
      }
      else if (searchedCoins[0].quote.USD) {
        return sortByVolumeUSD(searchedCoins).reverse()
      }
      else if (searchedCoins[0].quote.GBP) {
        return sortByVolumeGBP(searchedCoins).reverse()
      }
    }
    else if (sorting === 'VolumeUp') {
      if (searchedCoins[0].quote.EUR) {
        return sortByVolumeEUR(searchedCoins)
      }
      else if (searchedCoins[0].quote.USD) {
        return sortByVolumeUSD(searchedCoins)
      }
      else if (searchedCoins[0].quote.GBP) {
        return sortByVolumeGBP(searchedCoins)
      }
    }
    else if (sorting === 'CirculatingSupplyDown') {
      return sortBySupply(searchedCoins).reverse()
    }
    else if (sorting === 'CirculatingSupplyUp') {
      return sortBySupply(searchedCoins)
    }
  }
  else return []
}