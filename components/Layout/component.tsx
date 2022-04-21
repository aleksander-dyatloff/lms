import Element from '@components/Element'
import useAppDispatch from '@hooks/useAppDispatch/hook'
import useAppSelector from '@hooks/useAppSelector/hook'
import FetchStatus from '@interfaces/FetchStatus'
import { getUserInfo } from '@store/authorizedUser'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import LayoutTypes from './types'

const Layout: LayoutTypes.MainComponent = ({ ...restProps }) => {
  const router = useRouter()

  const userAuthStatus = useAppSelector((state) => state.authorizedUser.status)

  const dispatch = useAppDispatch()

  useEffect(() => {
    const storageUserId = localStorage.getItem('user-id')

    if (
      storageUserId
      && userAuthStatus !== FetchStatus.Fulfilled
    ) void dispatch(getUserInfo(storageUserId))
    else if (!storageUserId) void router.push('/login')
  }, [])

  return (
    <Element {...restProps} />
  )
}

export default Layout
