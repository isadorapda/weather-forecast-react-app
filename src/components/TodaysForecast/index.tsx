import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { TbSunrise, TbSunset } from 'react-icons/tb'
import { WiRaindrop } from 'react-icons/wi'
import { BsSnow } from 'react-icons/bs'

import {
  TodaysForecastContainer,
  TodaysForecastDailyGrid,
  HourlyTemperatureGrid,
  HourlyForecastGrid,
} from './todaysForecastStyles'

import { Precipitation } from '../HourlyFiltersComponents/Precipitation'
import { SnowFall } from '../HourlyFiltersComponents/SnowFall'
import { ApparentTemperature } from '../HourlyFiltersComponents/ApparentTemperature'
import { WindSpeed } from '../HourlyFiltersComponents/Windspeed'
import { Humidity } from '../HourlyFiltersComponents/Humidity'
import { CloudCover } from '../HourlyFiltersComponents/CloudCover'
import dayjs from 'dayjs'

import { DatesContext } from '../../context/DateTimeContext'
import { WeatherContext } from '../../context/WeatherContext'

import { Icons } from '../CurrentTemperature'

interface Props {
  weatherIconsNight: Icons[]
  weatherIconsDay: Icons[]
  hourlyUnit: string | undefined
  dailyUnit: string | undefined
}

export const TodaysForecast: React.FC<Props> = ({
  weatherIconsNight,
  weatherIconsDay,
  hourlyUnit,
  dailyUnit,
}) => {
  const { weather } = useContext(WeatherContext)
  const {
    matchingIndex,
    timeHrsArrayAtTimezone,
    hourAtSelectedTimeZone,
    sunriseTimeHours,
    sunsetTimeHours,
    formatedTimesArray,
  } = useContext(DatesContext)

  const precipitationSum = weather.dailyINFO?.precipitation_sum
  const dailySnowFall = weather.dailyINFO?.snowfall_sum
  const hourlyTemperature = weather.hourlyINFO?.temperature_2m
  const hourlyWeatherCode = weather.hourlyINFO?.weathercode
  const sunriseISODate = weather.dailyINFO?.sunrise
  const sunsetISODate = weather.dailyINFO?.sunset

  const hoursSlicedArray =
    matchingIndex || matchingIndex === 0
      ? timeHrsArrayAtTimezone?.slice(matchingIndex, matchingIndex + 24)
      : timeHrsArrayAtTimezone?.slice(
          hourAtSelectedTimeZone,
          hourAtSelectedTimeZone + 24
        )

  const getHourlyInfo = () => {
    if (
      hourlyTemperature &&
      hourlyWeatherCode &&
      (matchingIndex || matchingIndex === 0)
    ) {
      return hoursSlicedArray?.map((h, i) => {
        const hourlyTemp = hourlyTemperature.slice(hourAtSelectedTimeZone)[i]

        const icons =
          sunriseTimeHours &&
          sunsetTimeHours &&
          h >= sunriseTimeHours[0] &&
          h <= sunsetTimeHours[0]
            ? weatherIconsDay
            : weatherIconsNight

        const weathercodes = hourlyWeatherCode.slice(matchingIndex)[i]
        const weatherIcon = icons.find((icon) =>
          icon.code.includes(weathercodes)
        )
        return {
          timeHrs: (
            <article key={uuidv4()}>
              {h === hourAtSelectedTimeZone
                ? 'Now'
                : formatedTimesArray?.slice(matchingIndex)[i]}
            </article>
          ),
          icon: (
            <img
              title={weatherIcon?.label}
              src={weatherIcon?.img}
              key={uuidv4()}
            />
          ),
          hourlyTemp: (
            <span key={uuidv4()}>{`${hourlyTemp}${
              hourlyUnit ? hourlyUnit : dailyUnit
            }`}</span>
          ),
        }
      })
    }
  }

  const todaysForecast = getHourlyInfo()

  return (
    <TodaysForecastContainer>
      <TodaysForecastDailyGrid>
        {precipitationSum ? (
          <article title="Total Rain">
            <WiRaindrop />
            <small>{`${precipitationSum[0]}mm`}</small>
          </article>
        ) : null}
        {sunriseISODate ? (
          <article title="Sunrise">
            <TbSunrise />
            <small>{`${dayjs(sunriseISODate[0]).format('h:mm A')}`}</small>
          </article>
        ) : null}
        {sunsetISODate ? (
          <article title="Sunset">
            <TbSunset />
            <small>{`${dayjs(sunsetISODate[0]).format('h:mm A')}`}</small>
          </article>
        ) : null}
        {dailySnowFall ? (
          <article title="Total Snow Fall">
            <BsSnow />
            <small>{`${dailySnowFall[0]}cm`}</small>
          </article>
        ) : null}
      </TodaysForecastDailyGrid>

      <HourlyTemperatureGrid>
        {hourlyTemperature ? todaysForecast?.map((el) => el.timeHrs) : null}
        {hourlyTemperature ? todaysForecast?.map((el) => el.icon) : null}
        {hourlyTemperature ? todaysForecast?.map((el) => el.hourlyTemp) : null}
      </HourlyTemperatureGrid>

      <HourlyForecastGrid>
        <Precipitation hoursSlicedArray={hoursSlicedArray} />
        <SnowFall hoursSlicedArray={hoursSlicedArray} />
        <ApparentTemperature hourlyUnit={hourlyUnit} dailyUnit={dailyUnit} />
        <WindSpeed />
        <Humidity />
        <CloudCover />
      </HourlyForecastGrid>
    </TodaysForecastContainer>
  )
}
