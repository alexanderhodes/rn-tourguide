import * as React from 'react'
import { TourGuideContext } from '../components/TourGuideContext'

export const useTourGuideController = (scrollView?: React.RefObject<any> | undefined) => {
  const {
    start,
    canStart,
    stop,
    eventEmitter,
    getCurrentStep,
    setScrollView
  } = React.useContext(TourGuideContext)

  React.useEffect(() => {
    if (setScrollView) {
      setScrollView(scrollView)
    }
  }, [scrollView])

  return {
    start,
    stop,
    eventEmitter,
    getCurrentStep,
    canStart,
  }
}
