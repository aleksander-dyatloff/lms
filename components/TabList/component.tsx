import combineClasses from '@utils/combineClasses'
import isBrowser from '@utils/isBrowser'
import { MouseEventHandler, useContext, useEffect, useRef, useState } from 'react'

import TabSizingContext from './contexts'
import Wrapper from './styles'
import TabListComponent from './types'

const TabList: TabListComponent.MainComponent = ({
  as = 'div',
  children,
  ...restProps
}) => {
  const [tabSizing, setTabSizing] = useState<TabListComponent.TabSize | null>()

  return (
    <TabSizingContext.Provider value={setTabSizing}>
      <Wrapper
        as={as}
        {...restProps}
      >
        <div
          className='indicator'
          style={{
            width: `${tabSizing?.width}px`,
            left: `${tabSizing?.left}px`,
          }}
        />
        {children}
      </Wrapper>
    </TabSizingContext.Provider>
  )
}

TabList.Item = ({
  name = '',
  value,
  selectedValue,
  onChange,
  ...restProps
}) => {
  const ref = useRef<HTMLButtonElement>(null)

  const wrapperClasses = combineClasses('item reset', selectedValue === value && 'active')

  const getTabItemSize = (): TabListComponent.TabSize => ({
    width: ref.current?.clientWidth ?? 100,
    left: ref.current?.offsetLeft ?? 0,
  })

  const setTabSizing = useContext(TabSizingContext)

  const handleClick: MouseEventHandler<HTMLElement> = () => {
    onChange({
      name, value,
    })

    setTabSizing(getTabItemSize())
  }

  useEffect(() => {
    if (isBrowser() && selectedValue === value) {
      setTabSizing(getTabItemSize())
    }
  }, [])

  return (
    <button
      ref={ref}
      type='button'
      name={name}
      onClick={handleClick}
      className={wrapperClasses}
      {...restProps}
    />
  )
}

export default TabList
