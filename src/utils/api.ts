
const AVAILABLE_CURRENCIES = [
    'USD',
    'GBP',
    'CAD',
    'AUD',
    'EUR',
    'BRL',
    'MXN',
    'INR',
] as const;

type AvailableCurrencies = typeof AVAILABLE_CURRENCIES[number];

type FxRates = {
    base: string;
    conversionRate: Record<AvailableCurrencies, number>
}

const API = `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_API_KEY}/latest/USD`

export default async function getData(): Promise<FxRates | void> {
    return fetch(API)
        .then((res) => res.json())
        .then((data) => {
            data
            return {
                base: data.base_code,
                conversionRate: Object.keys(data.conversion_rates).reduce((acc, key) => {
                    if (AVAILABLE_CURRENCIES.includes(key as AvailableCurrencies)) {
                        acc[key as AvailableCurrencies] = data.conversion_rates[key]
                    }
                    return acc
                }, {} as FxRates['conversionRate'])
            }
        })
        .catch((err) => console.log(err))
}