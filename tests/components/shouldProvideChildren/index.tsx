import { getByTestId } from '@testing-library/react'
import render from '@utils/jestComponentRender'
import { FC } from 'react'

const shouldProvideChildren: (component: FC) => void = (Comp) => {
  test('should provide children', () => {
    const { container } = render(
      <Comp>
        <div data-testid='child'>Some children</div>
      </Comp>,
    )

    const result = getByTestId(container, 'child')

    if (!result as any instanceof HTMLDivElement) throw new Error('children was not provided')
  })
}

export default shouldProvideChildren
