import React, { Component } from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import { IStep, ValueXY } from '../types'
import style from './style'

interface Props {
  size: ValueXY
  position: ValueXY
  borderRadius?: number
  currentStep?: IStep
}

interface State {}

export class MaskOpacity extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { position, size, currentStep } = this.props
    const shape = currentStep!.shape

    const left = position.x
    const top = position.y
    const width = size.x
    const height = size.y
    const borderRadius = shape === "circle" ? height / 2 : this.props.borderRadius

    return (
      <TouchableWithoutFeedback style={style.maskOpacityContainer} onPress={currentStep?.onPress}>
        <View style={{ height, width, top, left, borderRadius}} />
      </TouchableWithoutFeedback>
    )
  }
}
