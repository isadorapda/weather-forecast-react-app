import React, { useContext } from 'react'
import { BsSnow } from 'react-icons/bs'

import { DatesContext } from '../../context/DateTimeContext'
import { WeatherContext } from '../../context/WeatherContext'

interface Props {
  hoursSlicedArray: number[] | undefined
}

export const SnowFall: React.FC<Props> = ({ hoursSlicedArray }) => {
  const { weather } = useContext(WeatherContext)
  const { matchingIndex, hourAtSelectedTimeZone, formatedTimesArray } =
    React.useContext(DatesContext)

  const hourlySnowFallArray = weather.hourlyINFO?.snowfall

  const getSnowFallData = () => {
    if (
      (matchingIndex || matchingIndex === 0) &&
      hourlySnowFallArray &&
      hoursSlicedArray
    ) {
      const hourlySnowFall = hourlySnowFallArray?.slice(
        hourAtSelectedTimeZone,
        hourAtSelectedTimeZone + 24
      )
      const nextSnowFallVolume = hourlySnowFall?.find((rain) => rain > 0)
      const nextSnowFallIndex = hourlySnowFall?.findIndex((rain) => rain > 0)
      const nextSnowFallTime = hoursSlicedArray[nextSnowFallIndex]
      const volume = nextSnowFallVolume ? nextSnowFallVolume : '0'
      const forecast = !nextSnowFallTime
        ? ' in the next 24h'
        : formatedTimesArray?.slice(matchingIndex)[nextSnowFallIndex]

      return {
        volume,
        forecast,
      }
    }
  }
  const snowFall = getSnowFallData()

  return (
    <>
      {hourlySnowFallArray ? (
        <article>
          <h4>
            <BsSnow />
            Snow Fall
          </h4>
          <p>
            {snowFall?.volume}cm expected
            {snowFall?.forecast}
          </p>
        </article>
      ) : null}
    </>
  )
}
