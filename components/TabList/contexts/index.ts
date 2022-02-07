import { createContext, Dispatch, SetStateAction } from 'react'

import TabListComponent from '../types'

type SetTabSize = Dispatch<SetStateAction<TabListComponent.TabSize | null | undefined>>

const TabSizingContext = createContext<SetTabSize>(() => {

})

export default TabSizingContext
