import styled from 'styled-components'
import { space, fontSize, color, textAlign, fontWeight } from 'styled-system'

export const H2 = styled.h2`
  ${space}
  ${color}
  ${textAlign}
  ${fontSize}
  ${fontWeight}
  font-family: ${props => props.theme.fonts[1]};
`
H2.defaultProps = {
  fontSize: 6,
  fontWeight: 600,
  color: 'charcoal',
  m: 1
}

export const H3 = H2.withComponent('h3')

H3.defaultProps = {
  fontSize: 4,
  fontWeight: 500,
  color: 'charcoal-muted',
  m: 1
}
