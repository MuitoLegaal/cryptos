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

export function sorted(sorting, searchedCoins, currency) {
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
    if (currency === 'EUR') {
      return sortByPriceEUR(searchedCoins).reverse()
    }
    else if (currency === 'USD') {
      return sortByPriceUSD(searchedCoins).reverse()
    }
    else if (currency === 'GBP') {
      return sortByPriceGBP(searchedCoins).reverse()
    }
  }
  else if (sorting === 'PriceUp') {
    if (currency === 'EUR') {
      return sortByPriceEUR(searchedCoins)
    }
    else if (currency === 'USD') {
      return sortByPriceUSD(searchedCoins)
    }
    else if (currency === 'GBP') {
      return sortByPriceGBP(searchedCoins)
    }
  }
  else if (sorting === '24hDown') {
    if (currency === 'EUR') {
      return sortBy24hEUR(searchedCoins).reverse()
    }
    else if (currency === 'USD') {
      return sortBy24hUSD(searchedCoins).reverse()
    }
    else if (currency === 'GBP') {
      return sortBy24hGBP(searchedCoins).reverse()
    }
  }
  else if (sorting === '24hUp') {
    if (currency === 'EUR') {
      return sortBy24hEUR(searchedCoins)
    }
    else if (currency === 'USD') {
      return sortBy24hUSD(searchedCoins)
    }
    else if (currency === 'GBP') {
      return sortBy24hGBP(searchedCoins)
    }
  }
  else if (sorting === '7dDown') {
    if (currency === 'EUR') {
      return sortBy7dEUR(searchedCoins).reverse()
    }
    else if (currency === 'USD') {
      return sortBy7dUSD(searchedCoins).reverse()
    }
    else if (currency === 'GBP') {
      return sortBy7dGBP(searchedCoins).reverse()
    }
  }
  else if (sorting === '7dUp') {
    if (currency === 'EUR') {
      return sortBy7dEUR(searchedCoins)
    }
    else if (currency === 'USD') {
      return sortBy7dUSD(searchedCoins)
    }
    else if (currency === 'GBP') {
      return sortBy7dGBP(searchedCoins)
    }
  }
  else if (sorting === 'MarketCapDown') {
    if (currency === 'EUR') {
      return sortByMarketCapEUR(searchedCoins).reverse()
    }
    else if (currency === 'USD') {
      return sortByMarketCapUSD(searchedCoins).reverse()
    }
    else if (currency === 'GBP') {
      return sortByMarketCapGBP(searchedCoins).reverse()
    }
  }
  else if (sorting === 'MarketCapUp') {
    if (currency === 'EUR') {
      return sortByMarketCapEUR(searchedCoins)
    }
    else if (currency === 'USD') {
      return sortByMarketCapUSD(searchedCoins)
    }
    else if (currency === 'GBP') {
      return sortByMarketCapGBP(searchedCoins)
    }
  }
  else if (sorting === 'VolumeDown') {
    if (currency === 'EUR') {
      return sortByVolumeEUR(searchedCoins).reverse()
    }
    else if (currency === 'USD') {
      return sortByVolumeUSD(searchedCoins).reverse()
    }
    else if (currency === 'GBP') {
      return sortByVolumeGBP(searchedCoins).reverse()
    }
  }
  else if (sorting === 'VolumeUp') {
    if (currency === 'EUR') {
      return sortByVolumeEUR(searchedCoins)
    }
    else if (currency === 'USD') {
      return sortByVolumeUSD(searchedCoins)
    }
    else if (currency === 'GBP') {
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