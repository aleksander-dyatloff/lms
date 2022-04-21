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
import CreateLessonFormModalComponent from './types'

const CreateLessonFormModal: CreateLessonFormModalComponent.MainComponent = ({
  onCreate,
  ...restProps
}) => {
  const userId = useAppSelector((state) => state.authorizedUser.info?._id)

  const [error, setError] = useState<string | null>(null)

  const form = useFormik({
    initialValues: {
      name: '',
      description: '',
      password: '',
    },
    validate(values) {
      const errors: typeof values = {}

      if (!values.name.trim()) errors.name = 'Name is required'
      if (values.name.trim().length < 4) errors.name = 'Min size of Name - 4 letters'
      if (values.name.trim().length > 20) errors.name = 'Max size of Name - 20 letters'

      if (values.description.trim().length < 10) errors.description = 'Min size of Description - 10 letters'
      if (values.description.trim().length > 50) errors.description = 'Max size of Description - 50 letters'

      if (!values.password.trim()) errors.password = 'Password is required'

      return errors
    },
    onSubmit(values) {
      if (!userId) return

      setError(null)

      void LessonsAPI
        .create(userId, values)
        .then((createdLesson) => onCreate(createdLesson))
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
          Create new lesson
        </Text>
        <form
          className='reset'
          onSubmit={form.handleSubmit}
        >
          <Grid>
            {error && (
              <Grid.Column size={12}>
                <Text>
                  {error}
                </Text>
              </Grid.Column>
            )}
            <ThemeProvider theme={mainReversedTheme}>
              <Grid.Column size={12}>
                <TextField
                  className='field'
                  placeholder='Lesson Name *'
                  {...form.getFieldProps('name')}
                  error={form.touched.name && form.errors.name}
                />
              </Grid.Column>
              <Grid.Column size={12}>
                <TextField
                  className='field'
                  placeholder='Lesson Description'
                  {...form.getFieldProps('description')}
                  error={form.errors.description}
                />
              </Grid.Column>
              <Grid.Column size={12}>
                <TextField
                  className='field'
                  placeholder='Lesson Password *'
                  type='password'
                  {...form.getFieldProps('password')}
                  error={form.touched.password && form.errors.password}
                />
              </Grid.Column>
            </ThemeProvider>
            <Grid.Column size={12}>
              <Button type='submit'>
                Create lesson
              </Button>
            </Grid.Column>
          </Grid>
        </form>
      </Modal>
    </Wrapper>
  )
}

export default CreateLessonFormModal
