import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export function useRequestForm () {
  const { isSubmitting, handleSubmit } = useForm({
    initialValues: {
      status: 'active'
    }
  })

  const {value: fio, errorMessage: fError, handleBlur: fBlur} = useField(
    'fio',
    yup.string()
      .trim()
      .required('Поле не должно быть пустым')
  )
  const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField(
    'phone',
    yup.string()
      .trim()
      .required('Поле не должно быть пустым')
    )
  const {value: amount, errorMessage: aError, handleBlur: aBlur} = useField(
    'amount',
    yup.number()
      .required('Поле не должно быть пустым')
      .min(0, 'Сумма не может быть меньше 0')
  )
  const {value: status} = useField('status')

  const onSubmit = handleSubmit(async () => {

  })
  return {
    status,
    isSubmitting,
    onSubmit,
    fio, fError, fBlur,
    phone, pError, pBlur,
    amount, aError, aBlur
  }
}
