import React from 'react'
import { Signin } from '@orbitall-core/module-common/screens'

export function handle(arr: any[]) {
  const initial: any = []

  if (arr.findIndex(x => x === 'CommonRoutes') > -1) {
    initial.push(<Signin />)
  }

  return initial
}