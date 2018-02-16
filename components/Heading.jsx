import {Text} from './Text.jsx'

// Fancy header for jumbotrons in Montserrat
export const PosterH1 = Text.withComponent('h1')

PosterH1.defaultProps = {
  color: 'white',
  fontFamily: 'montserrat',
  fontSize: 5,
  fontWeight: 400
}

// Fancy strapline for jumbotrons in Montserrat and green
export const PosterH2 = Text.withComponent('h2')

PosterH2.defaultProps = {
  color: 'aqua',
  fontFamily: 'montserrat',
  fontSize: 4,
  fontWeight: 400
}

// Regular document section heading
export const H2 = Text.withComponent('h2')

H2.defaultProps = {
  fontSize: 6,
  fontWeight: 600,
  color: 'charcoal',
  m: 1
}

// Regular subheading
export const H3 = Text.withComponent('h3')

H3.defaultProps = {
  fontSize: 4,
  fontWeight: 500,
  color: 'charcoal-muted',
  m: 1
}
