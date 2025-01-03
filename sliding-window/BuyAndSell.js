function main(prices){
    let left = 0;
    let right = 1;
    let maxProfit = 0;

    while(right < prices.length){
        if(prices[left] < prices[right]){
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit)
        } else {
            left = right;
        }
        right++;
    }

    return maxProfit;
}

console.log(main([10,1,12,6,7,1, 10]))