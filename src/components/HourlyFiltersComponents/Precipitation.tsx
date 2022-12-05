import React from 'react'
import { WiRaindrop } from 'react-icons/wi'

import { DatesContext } from '../../context/DateTimeContext'
import { WeatherContext } from '../../context/WeatherContext'

interface Props {
  hoursSlicedArray: number[] | undefined
}
export const Precipitation: React.FC<Props> = ({ hoursSlicedArray }) => {
  const { weather } = React.useContext(WeatherContext)
  const { matchingIndex, hourAtSelectedTimeZone, formatedTimesArray } =
    React.useContext(DatesContext)
  const hourlyPrecipitation = weather.hourlyINFO?.precipitation

  const getPrecipitationInfo = () => {
    if (
      (matchingIndex || matchingIndex === 0) &&
      hourlyPrecipitation &&
      hoursSlicedArray &&
      formatedTimesArray
    ) {
      const hourlyPrecipitationSum = hourlyPrecipitation?.slice(
        hourAtSelectedTimeZone,
        hourAtSelectedTimeZone + 24
      )

      let precipitationSum24h = 0
      for (let i = 0; i < hourlyPrecipitationSum.length; i++) {
        precipitationSum24h += hourlyPrecipitationSum[i]
      }

      const nextPrecipitationVolume = hourlyPrecipitationSum?.find(
        (rain) => rain > 0
      )

      const nextPrecipitationIndex = hourlyPrecipitationSum?.findIndex(
        (rain) => rain > 0
      )

      const nextPrecipitationTime = hoursSlicedArray[nextPrecipitationIndex]

      const nextHrVolume = nextPrecipitationVolume
        ? nextPrecipitationVolume
        : '0'

      const forecast = !nextPrecipitationTime
        ? ' in the next 24h'
        : ` at ${
            formatedTimesArray.slice(matchingIndex)[nextPrecipitationIndex]
          }`

      return {
        nextHrVolume,
        forecast,
        precipitationSum24h,
      }
    }
  }
  const precipitationResult = getPrecipitationInfo()
  return (
    <>
      {hourlyPrecipitation ? (
        <article>
          <h4>
            <WiRaindrop />
            Precipitation
          </h4>
          <p>
            {precipitationResult?.nextHrVolume}mm expected
            {precipitationResult?.forecast}
          </p>

          {precipitationResult?.precipitationSum24h &&
          precipitationResult?.precipitationSum24h > 0 ? (
            <p>
              {precipitationResult?.precipitationSum24h.toFixed(1)}mm expected
              in the next 24h
            </p>
          ) : null}
        </article>
      ) : null}
    </>
  )
}
