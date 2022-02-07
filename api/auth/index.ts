import Cadet from '@interfaces/Cadet'
import Teacher from '@interfaces/Teacher'
import User from '@interfaces/User'

import { api } from '../index'

const AuthAPI = {
  async login(token: string): Promise<User | Cadet | Teacher> {
    const { data } = await api.post<User | Cadet | Teacher>('/login', { token })

    return data
  },
}

export default AuthAPI
