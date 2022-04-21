import Element from '@components/Element/styles'
import styled from 'styled-components'

import AvatarComponent from './types'

const Wrapper = styled(Element)<AvatarComponent.WrapperProps>`
  padding: 20px 0;
  width: 100%;

  .avatar {
    margin-right: 20px;
  }

  .header {
    display: flex;
    align-items: center;
  }

  .userName {
    margin-right: auto;
  }
`

export default Wrapper
