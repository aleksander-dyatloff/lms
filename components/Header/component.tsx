import Avatar from '@components/Avatar'
import Grid from '@components/Grid'
import TabList from '@components/TabList'
import TextField from '@components/TextField'
import Align from '@interfaces/Align'
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
      <Grid>
        <Grid.Column size={2}>
          <TextField
            name='search'
            placeholder='Search info'
            value={search}
            onChange={handleSearchChange}
          />
        </Grid.Column>
        <Grid.Column>
          <TabList
            align={Align.Horizontal}
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
        </Grid.Column>
        <Grid.Column size={2}>
          <Avatar
            align={Align.Right}
            alt='Avatar'
          />
        </Grid.Column>
      </Grid>
    </Wrapper>
  )
}

export default Header
