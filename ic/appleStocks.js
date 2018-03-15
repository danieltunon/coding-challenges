function getMaxProfit(stockPrices) {

    // calculate the max profit
    let maxSoFar = null;
    if (stockPrices.length > 1) {
        let minBuy = stockPrices[0];
        let sell = 1;
        maxSoFar = stockPrices[sell] - minBuy;
        for (sell; sell < stockPrices.length; sell++) {
            maxSoFar = Math.max(maxSoFar, stockPrices[sell] - minBuy);
            minBuy = stockPrices[sell] < minBuy ? stockPrices[sell] : minBuy;
        }
    }

    return maxSoFar;
}
