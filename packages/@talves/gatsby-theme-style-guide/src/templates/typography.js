/** @jsx jsx */
import { jsx, Styled, useThemeUI } from '../provider'
import { TypeScale, TypeStyle } from '../components'

const Row = props => (
  <div
    {...props}
    sx={{
      display: 'flex',
      alignItems: 'baseline',
      flexWrap: 'wrap',

      width: '100%',
      mx: -30,
      '& > div': {
        px: 30,
      },
    }}
  />
)

const StyleSection = props => {
  const { theme = { colors: { text: 'black' } } } = useThemeUI()

  return (
    <div
      {...props}
      sx={{
        marginLeft: '40px',
        marginTop: '1rem',
        padding: '0.5rem',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: `${theme.colors.text}`,
      }}>
      {props.children}
    </div>
  )
}

export default props => {
  const { theme } = useThemeUI()
  const { fonts, fontWeights, lineHeights } = theme

  return (
    <section id="typography">
      <Styled.h2>Typography</Styled.h2>
      {fonts && (
        <StyleSection>
          <Styled.h3>Font Families</Styled.h3>
          <Row>
            {Object.keys(fonts).map(name => (
              <div key={name}>
                <TypeStyle fontFamily={name} fontSize={6}>
                  Aa
                </TypeStyle>
                <Styled.code title={fonts[name]}>{name}</Styled.code>
              </div>
            ))}
          </Row>
        </StyleSection>
      )}
      <StyleSection>
        <Styled.h3>Font Sizes</Styled.h3>
        <TypeScale />
      </StyleSection>
      {fontWeights && (
        <StyleSection>
          <Styled.h3>Font Weights</Styled.h3>
          <Row>
            {Object.keys(fontWeights).map(name => (
              <div key={name}>
                <TypeStyle fontSize={6} fontWeight={name}>
                  {fontWeights[name]}
                </TypeStyle>
                <Styled.code>{name}</Styled.code>
              </div>
            ))}
          </Row>
        </StyleSection>
      )}
      {lineHeights && (
        <StyleSection>
          <Styled.h3>Line Heights</Styled.h3>
          <Row>
            {Object.keys(lineHeights).map(name => (
              <div key={name}>
                <TypeStyle fontSize={6} lineHeight={name}>
                  {lineHeights[name]}
                </TypeStyle>
                <Styled.code>{name}</Styled.code>
              </div>
            ))}
          </Row>
        </StyleSection>
      )}
    </section>
  )
}
