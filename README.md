# Bitcoin Price Plasmoid

## About
Plasma 6 applet showing the current price of Bitcoin from several markets. The widget can display the price in USD or EUR, with optional decimals and icon/text display.

Written by Maciej Gierej and Bukowski12 - https://maciej.gierej.pl

## Installation
Install the local package for the current user:

```
kpackagetool6 --type Plasma/Applet --install package
```

To update an existing installation, use:

```
kpackagetool6 --type Plasma/Applet --upgrade package
```

Use the `-g` option to install the applet globally for all users.

## Supported sources
- Blockchain.info
- Bitfinex
- Bitstamp
- Kraken

## Supported currencies
- USD ($) - US Dollar
- EUR (€) - Euro

## Configuration
- Market source
- Currency
- Refresh interval in minutes
- Show or hide the icon
- Show or hide the price text
- Show or hide decimal places
- Refresh the price or open the market website when clicked

## Screenshots
![Bitcoin Price Plasmoid](https://raw.githubusercontent.com/MakG10/plasma-applet-bitcoin-price/master/bitcoin-price-plasmoid.png)

![Bitcoin Price Plasmoid (Panel)](https://raw.githubusercontent.com/MakG10/plasma-applet-bitcoin-price/master/bitcoin-price-panel.png)

![Bitcoin Price Plasmoid (Configuration)](https://raw.githubusercontent.com/MakG10/plasma-applet-bitcoin-price/master/bitcoin-price-config.png)

## Contributors
- Maciej Gierej
- NasCorp

## Changelog

### 2.1.0
- Ported the applet to Plasma 6
- Updated the exchange API definitions
- Added USD and EUR market support

### 1.2.2
- Removed outdated APIs
- Change currency API to api.exchangeratesapi.io with public access (as of now)
- Update QtControls imports to 2.5

### 1.2.1
- Changed currency converter API from fixer.io to currencyconverterapi.com
- Fixed XHR request and callback (could cause unnecessary multiple API calls)

### 1.2
- Added new exchange sources: Bitfinex, Bitstamp, Kraken, GDAX
- Added "Show decimals" option to show/hide decimals in the price
- Added "Show background" option to show/hide plasmoid background on the desktop

### 1.1
- Fixed displaying on panels (issue #1)
- Added "Show text" option

### 1.0
Initial release
