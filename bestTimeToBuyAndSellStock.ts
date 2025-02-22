function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let lp = 0
    let rp = 1
    
    while(rp < prices.length){
        if(prices[rp] - prices[lp] > maxProfit){
            maxProfit = prices[rp] - prices[lp]
        }
        if(prices[rp] < prices[lp]){
            lp = rp
        }
        rp++
    }
    return maxProfit
};
