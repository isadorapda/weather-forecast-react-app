export interface Hourly {
  time?: string[]
  temperature_2m?: number[]
  precipitation?: number[]
  snowfall?: number[]
  cloudcover?: number[]
  windspeed_10m?: number[]
  weathercode?: number[]
  apparent_temperature?: number[]
  relativehumidity_2m?: number[]
}

export interface Daily {
  time?: string[]
  temperature_2m_max: number[]
  temperature_2m_min: number[]
  precipitation_sum?: number[]
  sunrise?: string[]
  sunset?: string[]
  snowfall_sum?: number[]
  windspeed_10m_max?: number[]
  weathercode?: number[]
}

export interface Forecast {
  placeName?: string
  country?: string
  latitude?: number
  longitude?: number
  timezone?: string
  hourly?: Hourly
  daily?: Daily
  hourly_units?: { temperature_2m: string }
  daily_units?: {
    temperature_2m_max: string
    temperature_2m_min: string
  }
  current_weather: { temperature: number; time: string; windspeed?: number }
  hourlyINFO?: Hourly | null | undefined
  dailyINFO?: Daily | null | undefined
}
