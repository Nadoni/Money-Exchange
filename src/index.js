// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let exchange = {};
    if (!currency) return exchange;
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    let nominals = {H: 50, Q: 25, D: 10, N: 5, P: 1};

    for (let nom in nominals){
        while(currency >= nominals[nom]){
            exchange[nom] = exchange[nom] || 0;
            exchange[nom] += 1;
            currency -= nominals[nom];
            // console.log(nom + ": " + nominals[nom]);
        }
    }

    return exchange;
};
