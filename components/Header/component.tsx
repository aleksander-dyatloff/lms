import Avatar from '@components/Avatar'
import Grid from '@components/Grid'
import TabList from '@components/TabList'
import Text from '@components/Text'
import TextField from '@components/TextField'
import useAppDispatch from '@hooks/useAppDispatch/hook'
import useAppSelector from '@hooks/useAppSelector/hook'
import Align from '@interfaces/Align'
import ChangeHandler from '@interfaces/ChangeHandler'
import FetchStatus from '@interfaces/FetchStatus'
import { logoutUser } from '@store/authorizedUser'
import { useRouter } from 'next/router'
import { ChangeEventHandler, FC, useEffect, useState } from 'react'
import { useGoogleLogout } from 'react-google-login'
import { useTheme } from 'styled-components'

import Wrapper from './styles'
import HeaderComponent from './types'

const Header: FC<HeaderComponent.Props> = ({ ...restProps }) => {
  const theme = useTheme()
  const router = useRouter()
  const dispatch = useAppDispatch()
  const userInfo = useAppSelector((state) => state.authorizedUser.info)
  const userAuthStatus = useAppSelector((state) => state.authorizedUser.status)
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

  const { signOut } = useGoogleLogout({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    onLogoutSuccess() {
      dispatch(logoutUser())
      void router.push('/login')
    },
  })

  useEffect(() => {
    setTab(routerSplitPathname[1] ?? '')
  }, [router.pathname])

  return (
    <Wrapper
      palette={theme.palette.primary}
      {...restProps}
    >
      <Grid>
        <Grid.Column
          size={2}
          className='searchWrapper'
        >
          <TextField
            name='search'
            placeholder='Search info'
            value={search}
            onChange={handleSearchChange}
          />
        </Grid.Column>
        <Grid.Column className='navigationWrapper'>
          {userAuthStatus === FetchStatus.Fulfilled && (
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
              Profile
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
              value='lessons'
              onChange={handleChange}
            >
              Lessons
            </TabList.Item>
          </TabList>
          )}
        </Grid.Column>
        <Grid.Column
          className='userInfo'
          size={2}
          onClick={signOut}
        >
          <Text className='userTitle'>
            {userInfo?.name}
          </Text>
          <Avatar
            src={userInfo?.picture}
            alt={userInfo?.name ?? 'Avatar'}
          />
        </Grid.Column>
      </Grid>
    </Wrapper>
  )
}

export default Header
