import Avatar from '@components/Avatar'
import Button from '@components/Button'
import Text from '@components/Text'
import useAppDispatch from '@hooks/useAppDispatch/hook'
import useAppSelector from '@hooks/useAppSelector/hook'
import { loginUser } from '@store/authorizedUser'
import { useGoogleLogin } from 'react-google-login'

import Wrapper from './styles'
import AvatarComponent from './types'

const Profile: AvatarComponent.MainComponent = ({ ...restProps }) => {
  const user = useAppSelector((state) => state.authorizedUser)

  const dispatch = useAppDispatch()

  const { signIn } = useGoogleLogin({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    onSuccess(res) {
      void dispatch(loginUser(res?.tokenId))
    },
  })

  return (
    <Wrapper
      {...restProps}
    >
      <div className='header'>
        <Avatar
          className='avatar'
          size={Avatar.size?.lg}
          src={user.info?.picture}
          alt={user.info?.name ?? 'Avatar'}
        />
        <Text
          variant='h5'
          className='userName'
        >
          {user.info?.name}
        </Text>
        <Button onClick={signIn}>
          Change Account
        </Button>
      </div>
    </Wrapper>
  )
}

export default Profile
