import Avatar from '@components/Avatar'
import TabList from '@components/TabList'
import TextField from '@components/TextField'
import ChangeHandler from '@interfaces/ChangeHandler'
import { useRouter } from 'next/router'
import { ChangeEventHandler, FC, useState } from 'react'
import { useTheme } from 'styled-components'

import Wrapper from './styles'
import HeaderComponent from './types'

const Header: FC<HeaderComponent.Props> = ({ ...restProps }) => {
  const theme = useTheme()
  const router = useRouter()
  const routerSplitPathname = router.pathname.split('/')
  const [tab, setTab] = useState(routerSplitPathname[routerSplitPathname.length - 1] ?? '')
  const [search, setSearch] = useState('')

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.currentTarget.value)
  }

  const handleChange: ChangeHandler = ({ value }) => {
    setTab(value)
    void router.push(`/${value}`)
  }

  return (
    <Wrapper
      palette={theme.palette.primary}
      {...restProps}
    >
      <TextField
        name='search'
        placeholder='Search info'
        value={search}
        onChange={handleSearchChange}
      />
      <TabList
        as='nav'
        className='navigation'
      >
        <TabList.Item
          selectedValue={tab}
          value=''
          onChange={handleChange}
        >
          Home
        </TabList.Item>
        <TabList.Item
          selectedValue={tab}
          value='diary'
          onChange={handleChange}
        >
          Diary
        </TabList.Item>
        <TabList.Item
          selectedValue={tab}
          value='school'
          onChange={handleChange}
        >
          School
        </TabList.Item>
      </TabList>
      <Avatar
        size='sm'
        alt='Avatar'
      />
    </Wrapper>
  )
}

export default Header
