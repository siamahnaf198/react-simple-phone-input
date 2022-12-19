Country Data Codes
==========

A node js package to get country data including country name, code, currency information, emoji etc.

## Introduction
A simple but useful functional node packages with all country data. It includes all useful country data gives several function to complete your project.

## Countries

The data currently provided for each country is:

  * `id` The unique id number for the array
  * `name` The english name for the country
  * `isoAlpha2` The [ISO 3166-1 alpha 2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code
  * `isoAlpha3` The [ISO 3166-1 alpha 3](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code
  * `isoNumeric` The [ISO 3166-1 numeric](https://en.wikipedia.org/wiki/ISO_3166-1_numeric)
  * `currency` An object with currency info.
  
    - `code` The [ISO 4217 currency codes](http://en.wikipedia.org/wiki/ISO_4217)
    - `name` The currency name
    - `symbol` The currency symbol
    
  * `flag` Country flag base64 data
  * `languages` An array of [ISO 639-2](http://en.wikipedia.org/wiki/ISO_639-2) codes for languages.
  * `countryCallingCodes` The international call prefixes for this country.
  * `emoji` The emoji of country's flag.

## Installation

```bash
$ npm i country-data-codes
```
```bash
import { getCountryList } from "country-data-codes";
or
const { getCountryList } = require("country-data-codes")
```
Example
```bash
console.log(getCountryList()); //Returns all country list
```

## Methods
### getCurrency(countryCode)
Returns the country's currency info by providing country code.

Example
```bash
import { getCurrency, GetCurrencyTypes } from "country-data-codes";

const currencyInfo: GetCurrencyTypes = getCurrency("BD"); // Here country code can be isoAlpha2 or isoAlpha3

console.log(currencyInfo)
```
Return values-
* `name` currency name
* `code` currency code
* `symbol` currency symbol

### getCallingCode(countryCode)
Returns the country's calling code. It returns an array of string.

Example
```bash
import { getCallingCode, GetCallingCodeTypes } from "country-data-codes";

const dialingCode: GetCallingCodeTypes = getCallingCode("BD")

console.log(dialingCode) // Give the country code(isoAlpha2 or isoAlpha3)
//{
  code: "880",
  format: "+880",
  flag: "" //Base64 flash data
}
```
### getLanguages(countryCode)
Returns the country's languages. It returns an array of string;

Example
```bash
import { getLanguages } from "country-data-codes";

console.log(getLanguages("BD")) // Give the country code(isoAlpha2 or isoAlpha3)
//["ben"]
```

### getFlagBase64(countryCode)
Returns the country's flag image as base64 data

Example
```bash
import { getFlagBase64 } from "country-data-codes";

const flag = getFlagBase64("BD") // Give the country code(isoAlpha2 or isoAlpha3)

//<img src=`data:image/png;base64, ${flag}`/>
```

### lookup(query)
You can search and find any country's data by any parameter, like-
* by `name`: You can search and find data by country name
* by `countryCode`: You can search and find data by country code
* by `callingCode`: You can search and find data by country calling code
* by `currencyName`: You can search and find data by country currency name
* by `currencyCode`: You can search and find data by country currency code
* by `currencySymbol`: You can search and find data by country currency symbol
* by `isoNumeric`: You can search and find data by country iso numeric

Example
```bash
import { lookup, CountryDataTypes } from "country-data-codes";

const data: CountryDataTypes = lookup({name: "Bangladesh"})
const data: CountryDataTypes = lookup({countryCode: "BD"})
const data: CountryDataTypes = lookup({callingCode: "+880"})
const data: CountryDataTypes = lookup({currencyName: "taka"})
const data: CountryDataTypes = lookup({currencyCode: "BDT"})
const data: CountryDataTypes = lookup({currencySymbol: "৳"})
```

## Issues or correction
If you face any issues to any function or see any wrong information about country, please let me know.

## Stay in touch

- Author - [Siam Ahnaf](https://www.siamahnaf.com/)
- Website - [https://www.siamahnaf.com/](https://www.siamahnaf.com/)
- Twitter - [https://twitter.com/siamahnaf198](https://twitter.com/siamahnaf198)
- Githup - [https://github.com/siamahnaf198](https://github.com/siamahnaf198)

## License

country-data-codes [MIT licensed](LICENSE).