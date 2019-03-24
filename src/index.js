// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {    
    var coins = {
        "H": 50,
        'Q': 25,
        'D': 10,
        'N': 5,
        'P': 1
    },
        result = {};

    if (currency > 10000) {
        result['error'] = "You are rich, my friend! We don't have so much coins for exchange";
    }
    else {
        for (var key in coins) {
            var countCoins = Math.floor(currency / coins[key]);            
            if (countCoins > 0) {
                result[key] = countCoins;
            }

            if ((currency / coins[key]) > 0) {
                currency -= countCoins * coins[key];
            }
        }
    }
    return result;
}