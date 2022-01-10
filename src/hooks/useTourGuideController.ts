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
      if (scrollView) {
        setScrollView(scrollView)  
      } else {
        setScrollView(null)
      }
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
