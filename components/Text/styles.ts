import Element from '@components/Element'
import styled from 'styled-components'

const Wrapper = styled(Element)`
  &.h1 {
    font-size: 2.2rem;
    font-weight: 600;
  }

  &.h2 {
    font-size: 2rem;
    font-weight: 600;
  }

  &.h3 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  &.h4 {
    font-size: 1.6rem;
    font-weight: 500;
  }

  &.h5 {
    font-size: 1.4rem;
    font-weight: 500;
  }

  &.h6 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  &.p {
    line-height: 1.4;
  }

  &.sub {
    font-size: 0.8rem;
    opacity: 0.7;
  }

  &.a {
    color: ${({ theme }) => theme.palette.primary.main};

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`

export default Wrapper
