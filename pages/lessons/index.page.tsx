import LessonsAPI from '@api/lessons'
import Button from '@components/Button'
import Grid from '@components/Grid'
import Layout from '@components/Layout'
import Text from '@components/Text'
import useAppSelector from '@hooks/useAppSelector/hook'
import Lesson from '@interfaces/Lesson'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CreateLessonFormModal from 'shared/CreateLessonFormModal'
import JoinLessonFormModal from 'shared/JoinLessonFormModal copy'

import Page from './styles'

const Lessons: NextPage = () => {
  const [lessons, setLessons] = useState<Lesson[]>([])

  const [createModalIsOpen, setCreateModalIsOpen] = useState(false)

  const [joinModalIsOpen, setJoinModalIsOpen] = useState(false)

  const userId = useAppSelector((state) => state.authorizedUser.info?._id)

  useEffect(() => {
    if (!userId) return

    void LessonsAPI.getUserLessons(userId).then((fetchedLessons) => {
      setLessons(fetchedLessons)
    })
  }, [])

  return (
    <Layout>
      <Page>
        <Head>
          <title>Lessons</title>
        </Head>
        <div className='container'>
          <Grid>
            {lessons.map((lesson) => (
              <Grid.Column
                className='lessonWrapper'
                size={3}
                key={lesson._id}
              >
                <Link href={`/lessons/${lesson._id}`}>
                  <a className='card'>
                    <Text
                      variant='h6'
                      className='lessonTitle'
                    >
                      {lesson.name}
                    </Text>
                    <div className='lessonStatus'>
                      <Text
                        variant='sub'
                        className='lessonTeacher'
                      >
                        <b>
                          {lesson.owner.name}
                        </b>
                      </Text>
                      <Text variant='sub'>
                        {lesson.users.length}
                        {' '}
                        users
                      </Text>
                    </div>
                  </a>
                </Link>
              </Grid.Column>
            ))}
            <Grid.Column
              className='lessonWrapper'
              size={3}
            >
              <div className='card'>
                <div className='lessonsActions'>
                  <Button
                    onClick={() => setJoinModalIsOpen(true)}
                    variant={Button.variants.Outlined}
                  >
                    Join
                  </Button>
                  <div className='lessonsActionsDivider'>
                    or
                  </div>
                  <Button
                    onClick={() => setCreateModalIsOpen(true)}
                    variant={Button.variants.Outlined}
                  >
                    Create
                  </Button>
                </div>
              </div>
            </Grid.Column>
          </Grid>
        </div>
        <CreateLessonFormModal
          isOpen={createModalIsOpen}
          onCreate={(createdLesson) => {
            setLessons((prevLessons) => [...prevLessons, createdLesson])
            setCreateModalIsOpen(false)
          }}
          onClose={() => setCreateModalIsOpen(false)}
        />
        <JoinLessonFormModal
          isOpen={joinModalIsOpen}
          onCreate={(joinedLesson) => {
            setLessons((prevLessons) => [...prevLessons, joinedLesson])
            setJoinModalIsOpen(false)
          }}
          onClose={() => setJoinModalIsOpen(false)}
        />
      </Page>
    </Layout>
  )
}

export default Lessons
