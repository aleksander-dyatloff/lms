import { FC, useState } from 'react'
import { useTheme } from 'styled-components'

import Wrapper from './styles'
import TextFieldComponent from './types'

const TextField: FC<TextFieldComponent.Props> = ({
  value,
  ...restProps
}) => {
  const theme = useTheme()

  const [inFocus, setInFocus] = useState(false)

  return (
    <Wrapper
      notEmpty={Boolean(value)}
      inFocus={inFocus}
      palette={theme.palette.primary}
    >
      <input
        value={value}
        onFocus={() => setInFocus(true)}
        onBlur={() => setInFocus(false)}
        className='control reset'
        {...restProps}
      />
    </Wrapper>
  )
}

export default TextField
