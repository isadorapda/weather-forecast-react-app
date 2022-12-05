import Sun from '../assets/weather-icons/sun.svg'
import Moon from '../assets/weather-icons/clear-night.svg'
import PartlyCloudy from '../assets/weather-icons/partly-cloudy.svg'
import PartlyCloudyNight from '../assets/weather-icons/partly-cloudy-night.svg'
import Cloudy from '../assets/weather-icons/cloudy.svg'
import Drizzle from '../assets/weather-icons/drizzle.svg'
import Fog from '../assets/weather-icons/fog.svg'
import HeavyRain from '../assets/weather-icons/heavy-rain.svg'
import Thunderstorm from '../assets/weather-icons/severe-thunderstorm.svg'
import ScatterShower from '../assets/weather-icons/scatter-shower.svg'
import ScatterShowerNight from '../assets/weather-icons/scatter-shower-night.svg'
import Hail from '../assets/weather-icons/hail.svg'
import Sleet from '../assets/weather-icons/sleet.svg'
import Blizzard from '../assets/weather-icons/blizzard.svg'
import Snow from '../assets/weather-icons/snow.svg'

export const WEATHER_ICONS = [
  {
    value: 'sun',
    label: 'Clear sky',
    code: [0],
    img: `${Sun}`,
    period: ['day'],
  },
  {
    value: 'moon',
    label: 'Clear sky',
    code: [0],
    img: `${Moon}`,
    period: ['night'],
  },
  {
    value: 'partly-cloudy',
    label: 'Partly cloudy',
    code: [1, 2],
    img: `${PartlyCloudy}`,
    period: ['day'],
  },
  {
    value: 'partly-cloudy-night',
    label: 'Partly cloudy',
    code: [1, 2],
    img: `${PartlyCloudyNight}`,
    period: ['night'],
  },
  {
    value: 'cloudy',
    label: 'Cloudy',
    code: [3],
    img: `${Cloudy}`,
    period: ['night', 'day'],
  },
  {
    value: 'fog',
    label: 'Fog',
    code: [45, 48],
    img: `${Fog}`,
    period: ['night', 'day'],
  },
  {
    value: 'drizzle',
    label: 'Drizzle',
    code: [51, 53, 55],
    img: `${Drizzle}`,
    period: ['night', 'day'],
  },

  {
    value: 'sleet',
    label: 'Sleet',
    code: [56, 57],
    img: `${Sleet}`,
    period: ['night', 'day'],
  },
  {
    value: 'moderate-rain',
    label: 'Moderate Rain',
    code: [61, 63, 65],
    img: `${ScatterShower}`,
    period: ['day'],
  },
  {
    value: 'moderate-rain-night',
    label: 'Moderate Rain',
    code: [61, 63, 65],
    img: `${ScatterShowerNight}`,
    period: ['night'],
  },
  {
    value: 'hail',
    label: 'Hail',
    code: [66, 67],
    img: `${Hail}`,
    period: ['night', 'day'],
  },
  {
    value: 'snow',
    label: 'Snow',
    code: [71, 73, 75, 77],
    img: `${Snow}`,
    period: ['night', 'day'],
  },
  {
    value: 'heavy-rain',
    label: 'Showers',
    code: [80, 81, 82],
    img: `${HeavyRain}`,
    period: ['night', 'day'],
  },
  {
    value: 'blizzard',
    label: 'Blizzard',
    code: [85, 86],
    img: `${Blizzard}`,
    period: ['night', 'day'],
  },
  {
    value: 'thunderstorm',
    label: 'Thunderstorm',
    code: [95, 96, 99],
    img: `${Thunderstorm}`,
    period: ['night', 'day'],
  },
]
