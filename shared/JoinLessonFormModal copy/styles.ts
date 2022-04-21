import styled from 'styled-components'

import AvatarComponent from './types'

const Wrapper = styled.div<AvatarComponent.WrapperProps>`
  .modalTitle {
    margin-bottom: 16px;
  }

  .field {
    margin-bottom: 12px;
  }

  .formError {
    color: red;
  }
`

export default Wrapper
