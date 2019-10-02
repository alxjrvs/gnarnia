import React, { FC } from 'react'
import { useContextSelector } from 'use-context-selector'
import { AppContext } from '../../context'

export const GnarnianDisplay: FC<{ gnarnianKey: string }> = ({
  gnarnianKey,
}) => {
  const gnarnian = useGnarnian(gnarnianKey)

  return gnarnian ? (
    <>
      <h2>Viewing: {gnarnian.name}</h2>
      <h3> {gnarnian.role}</h3>
      <h3> Power: {gnarnian.power}</h3>
    </>
  ) : (
    <h1> Gnarnian not found!</h1>
  )
}

export const useGnarnian = (key: string) => {
  return useContextSelector(AppContext, ([{ gnarnians }]) =>
    gnarnians.find(gnarnian => gnarnian.key === key),
  )
}
