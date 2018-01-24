import styled from 'styled-components'
import {
  color,
  space,
  width,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  responsiveStyle,
  style
} from 'styled-system'

const fontFamily = responsiveStyle({
  prop: 'fontFamily',
  cssProperty: 'fontFamily',
  key: 'fonts'
})

const display = responsiveStyle({
  prop: 'display',
  cssProperty: 'display'
})

const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform'
})

export const Text = styled.span`
  ${color}
  ${space}
  ${width}
  ${textAlign}
  ${display}
  ${textTransform}
  ${lineHeight}
  ${letterSpacing}
  ${fontSize}
  ${fontWeight}
  ${fontFamily}
`
Text.defaultProps = {
  fontSize: 2,
  fontWeight: 400,
  fontFamily: 0
}
