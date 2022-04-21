import User from '@interfaces/User'

import { api } from '../index'

const UsersAPI = {
  async getInfo(userId: string): Promise<User> {
    const { data } = await api.post<User>('/users/personal', { userId })

    return data
  },
}

export default UsersAPI
