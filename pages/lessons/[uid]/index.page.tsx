import LessonsAPI from '@api/lessons'
import Avatar from '@components/Avatar'
import Breadcrumbs from '@components/Breadcrumbs'
import Button from '@components/Button'
import Divider from '@components/Divider'
import Grid from '@components/Grid'
import Layout from '@components/Layout'
import Text from '@components/Text'
import useAppSelector from '@hooks/useAppSelector/hook'
import Lesson from '@interfaces/Lesson'
import Roles from '@interfaces/Roles'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

import Page from './styles'

const Lessons: NextPage = () => {
  const [lesson, setLesson] = useState<Lesson>()

  const userId = useAppSelector((state) => state.authorizedUser.info?._id)

  const theme = useTheme()

  const router = useRouter()

  useEffect(() => {
    if (userId) {
      void LessonsAPI.getLessonInfo(userId, router.query.uid as string)
        .then((lessonInfo) => {
          setLesson(lessonInfo)
        })
    }
  }, [userId])

  const handleDeleteLesson = () => {
    if (!userId) return

    void LessonsAPI.delete(userId, lesson?._id)
      .then(() => router.push('/lessons'))
  }

  const handleLeaveLesson = () => {
    if (!userId) return

    void LessonsAPI.leave(userId, lesson?._id)
      .then(() => router.push('/lessons'))
  }

  return (
    <Layout>
      <Head>
        <title>{lesson?.name ?? 'Loading...'}</title>
      </Head>
      <Page>
        <div className='container'>
          <Grid>
            <Grid.Column size={12}>
              <Breadcrumbs
                className='breadcrumbs'
                items={[
                  {
                    href: '/lessons', label: 'Lessons',
                  },
                  { label: lesson?.name ?? '' },
                ]}
              />
            </Grid.Column>
            <Grid.Column size={3}>
              <Text
                as='div'
                variant='h4'
                className='lessonName'
              >
                {lesson?.name}
              </Text>
              <Text
                as='div'
                className='lessonDescription'
              >
                {lesson?.description}
              </Text>
              <Grid>
                <Grid.Column>
                  <Button onClick={userId === lesson?.owner ? handleDeleteLesson : handleLeaveLesson}>
                    {userId === lesson?.owner ? 'Delete' : 'Leave'}
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  {userId === lesson?.owner && (
                  <Button variant={Button.variants.Outlined}>
                    Edit
                  </Button>
                  )}
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column size={6}>
              <Text
                as='div'
                variant='h4'
                className='activityTitle'
              >
                Lectures and Homeworks
              </Text>
            </Grid.Column>
            <Grid.Column size={3}>
              <Text
                as='div'
                variant='h5'
                className='usersTitle'
              >
                Users
              </Text>
              <div className='users'>
                {lesson?.users.map((user, index) => (
                  <Fragment key={user._id}>
                    <div
                      className='user'
                    >
                      <Avatar
                        className='userAvatar'
                        src={user.picture}
                        alt={user.name}
                      />
                      <div className='userInfo'>
                        <Text className='userName'>
                          {user.name}
                        </Text>
                        <Text
                          className='userGrade'
                          variant='sub'
                        >
                          {Roles[user.role]}
                        </Text>
                      </div>
                    </div>
                    {index !== lesson.users.length - 1 && (
                    <Divider
                      className='userDivider'
                      color={theme.palette.secondary.contrast}
                    />
                    )}
                  </Fragment>
                ))}
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </Page>
    </Layout>
  )
}

export default Lessons
