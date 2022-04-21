import Lesson, { LessonInfo } from '@interfaces/Lesson'

import { api } from '../index'

const LessonsAPI = {
  async create(ownerId: string, lessonInfo: LessonInfo) {
    const { data: createdLesson } = await api.post<Lesson>('/lessons', {
      owner: ownerId,
      ...lessonInfo,
    })

    return createdLesson
  },

  async getUserLessons(userId: string) {
    const { data: lessons } = await api.post<Lesson[]>('/lessons/all', { userId })

    return lessons
  },

  async join(userId: string, name: string, password: string) {
    const { data: joinedLesson } = await api.post<Lesson>('/lessons/login', {
      userId,
      name,
      password,
    })

    return joinedLesson
  },

  async getLessonInfo(userId: string, lessonId: string) {
    const { data: lessonInfo } = await api.post<Lesson>(`/lessons/${lessonId}`, { userId })

    return lessonInfo
  },

  async delete(ownerId: string, lessonId: string) {
    const { data: deletedLesson } = await api.post<Lesson>(`/lessons/${lessonId}`, { ownerId })

    return deletedLesson
  },
}

export default LessonsAPI
