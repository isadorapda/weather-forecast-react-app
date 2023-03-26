import { Options } from '../components/SelectFilters'

export const FILTERS_DAILY: Options = [
  {
    value: 'sunrise',
    label: 'Sunrise',
  },
  {
    value: 'sunset',
    label: 'Sunset',
  },
  {
    value: 'precipitation_sum',
    label: 'Precipitation Total',
  },
  {
    value: 'snowfall_sum',
    label: 'Snow Fall',
  },
]
export const FILTERS_HOURLY: Options = [
  {
    value: 'apparent_temperature',
    label: 'Apparent Temperature',
  },
  {
    value: 'precipitation',
    label: 'Precipitation',
  },
  {
    value: 'snowfall',
    label: 'Snowfall',
  },
  {
    value: 'cloudcover',
    label: 'Cloudcover',
  },
  {
    value: 'windspeed_10m',
    label: 'Windspeed',
  },
  {
    value: 'relativehumidity_2m',
    label: 'Humidity',
  },
]
export const FILTERS_TEMPERATURE_UNITS = [
  {
    value: 'celcius',
    label: '°C',
    defaultChecked: true,
  },
  {
    value: 'fahrenheit',
    label: '°F',
  },
]
