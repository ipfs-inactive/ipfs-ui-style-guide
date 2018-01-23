import styled from 'styled-components'
import { space, fontSize, color, textAlign, fontWeight } from 'styled-system'

export const Headline = styled.h1`
  ${space}
  ${color}
  ${textAlign}
  ${fontSize}
  ${fontWeight}
  font-family: ${props => props.theme.fonts[1]};
`
Headline.defaultProps = {
  fontSize: 5,
  fontWeight: 400
}

export const SubHeadline = styled.h2`
  ${space}
  ${color}
  ${textAlign}
  ${fontSize}
  ${fontWeight}
  font-family: ${props => props.theme.fonts[1]};
`

SubHeadline.defaultProps = {
  fontSize: 4,
  fontWeight: 400
}
