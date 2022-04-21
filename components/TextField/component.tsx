import { FC, useState } from 'react'
import { useTheme } from 'styled-components'

import Wrapper, { Error } from './styles'
import TextFieldComponent from './types'

const TextField: FC<TextFieldComponent.Props> = ({
  value,
  error,
  className,
  ...restProps
}) => {
  const theme = useTheme()

  const [inFocus, setInFocus] = useState(false)

  return (
    <>
      <Wrapper
        className={className}
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
      {error && (
        <Error palette={theme.palette.primary}>
          {error}
        </Error>
      )}
    </>
  )
}

export default TextField
