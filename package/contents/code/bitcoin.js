var sources = [
    {
        name: 'Blockchain.info',
        homepage: 'https://blockchain.info/',
        currencies: {
            USD: {
                url: 'https://blockchain.info/ticker',
                getRate: function(data) {
                    return data.USD.last;
                }
            },
            EUR: {
                url: 'https://blockchain.info/ticker',
                getRate: function(data) {
                    return data.EUR.last;
                }
            }
        }
    },

    {
        name: 'Bitfinex',
        homepage: 'https://www.bitfinex.com/',
        currencies: {
            USD: {
                url: 'https://api-pub.bitfinex.com/v2/ticker/tBTCUSD',
                getRate: function(data) {
                    return data[2];
                }
            },
            EUR: {
                url: 'https://api-pub.bitfinex.com/v2/ticker/tBTCEUR',
                getRate: function(data) {
                    return data[2];
                }
            }
        }
    },

    {
        name: 'Bitstamp',
        homepage: 'https://www.bitstamp.net/market/tradeview/',
        currencies: {
            USD: {
                url: 'https://www.bitstamp.net/api/ticker',
                getRate: function(data) {
                    return data.ask;
                }
            },
            EUR: {
                url: 'https://www.bitstamp.net/api/v2/ticker/btceur',
                getRate: function(data) {
                    return data.ask;
                }
            }
        }
    },

    {
        name: 'Kraken',
        homepage: 'https://www.kraken.com/',
        currencies: {
            USD: {
                url: 'https://api.kraken.com/0/public/Ticker?pair=XXBTZUSD',
                getRate: function(data) {
                    return data.result.XXBTZUSD.a[0];
                }
            },
            EUR: {
                url: 'https://api.kraken.com/0/public/Ticker?pair=XXBTZEUR',
                getRate: function(data) {
                    return data.result.XXBTZEUR.a[0];
                }
            }
        }
    }
];

var currencySymbols = {
    'USD': '$',
    'EUR': '€'
};

function getRate(sourceName, currency, callback) {
    var source = getSourceByName(sourceName);

    if (source === null) {
        return false;
    }

    var market = source.currencies[currency];

    if (!market) {
        return false;
    }

    request(market.url, function(data) {
        if (!data || data.length === 0) {
            return false;
        }

        try {
            data = JSON.parse(data);
            var rate = market.getRate(data);

            if (typeof rate === 'undefined' || rate === null) {
                return false;
            }

            callback(Number(rate));
        } catch (error) {
            return false;
        }
    });

    return true;
}

function getSourceByName(name) {
    for (var i = 0; i < sources.length; i++) {
        if (sources[i].name === name) {
            return sources[i];
        }
    }

    return null;
}

function getAllSources() {
    var sourceNames = [];

    for (var i = 0; i < sources.length; i++) {
        sourceNames.push(sources[i].name);
    }

    return sourceNames;
}

function getAllCurrencies() {
    return ['USD', 'EUR'];
}

function request(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    };

    xhr.open('GET', url, true);
    xhr.send('');
}