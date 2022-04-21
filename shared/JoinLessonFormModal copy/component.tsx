import LessonsAPI from '@api/lessons'
import Button from '@components/Button'
import Grid from '@components/Grid'
import Modal from '@components/Modal'
import Text from '@components/Text'
import TextField from '@components/TextField'
import useAppSelector from '@hooks/useAppSelector/hook'
import mainReversedTheme from '@styles/theme/mainReversed'
import { useFormik } from 'formik'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Wrapper from './styles'
import JoinLessonFormModalComponent from './types'

const JoinLessonFormModal: JoinLessonFormModalComponent.MainComponent = ({
  onCreate,
  ...restProps
}) => {
  const userId = useAppSelector((state) => state.authorizedUser.info?._id)

  const [error, setError] = useState<string | null>(null)

  const form = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validate(values) {
      const errors: typeof values = {}

      if (!values.name.trim()) errors.name = 'Name is required'
      if (values.name.trim().length < 4) errors.name = 'Min size of Name - 4 letters'
      if (values.name.trim().length > 20) errors.name = 'Max size of Name - 20 letters'

      if (!values.password.trim()) errors.password = 'Password is required'

      return errors
    },
    onSubmit(values) {
      if (!userId) return

      void LessonsAPI
        .join(
          userId,
          values.name,
          values.password,
        )
        .then((joinedLesson) => onCreate(joinedLesson))
        .catch((err) => {
          setError(err.response.data.message)
        })
    },
  })

  return (
    <Wrapper
      {...restProps}
    >
      <Modal {...restProps}>
        <Text
          as='div'
          variant='h4'
          className='modalTitle'
        >
          Join new lesson
        </Text>
        <form
          className='reset'
          onSubmit={form.handleSubmit}
        >
          <Grid>
            {error && (
              <Grid.Column size={12}>
                <Text className='formError'>
                  {error}
                </Text>
              </Grid.Column>
            )}
            <ThemeProvider theme={mainReversedTheme}>
              <Grid.Column size={12}>
                <TextField
                  className='field'
                  placeholder='Lesson Name *'
                  error={form.touched.name && form.errors.name}
                  {...form.getFieldProps('name')}
                />
              </Grid.Column>
              <Grid.Column size={12}>
                <TextField
                  className='field'
                  placeholder='Lesson Password *'
                  type='password'
                  error={form.touched.password && form.errors.password}
                  {...form.getFieldProps('password')}
                />
              </Grid.Column>
            </ThemeProvider>
            <Grid.Column size={12}>
              <Button type='submit'>
                Join lesson
              </Button>
            </Grid.Column>
          </Grid>
        </form>
      </Modal>
    </Wrapper>
  )
}

export default JoinLessonFormModal
