import React from 'react';
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { AdditionalForm } from '../../components/ShadowBox/AdditionalForm';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import styles from './Registration.module.css'

type Tform = {
  name: string
  midName: string
  lastName: string
  email: string
  password: string
  passwordTo: string
}

export const Registration = () => {

  const { reset, handleSubmit, control, formState: { errors } } = useForm<Tform>({ mode: 'onBlur', defaultValues: { email: '', name: '', password: '', passwordTo: '', lastName: '', midName: '' } });


  const submitForm: SubmitHandler<Tform> = (data) => {

  }

  return (
    <section className={styles.registr}>
      <div className={styles.formWrap}>
        <Form type='submit' title='Регистрация сейчас не доступна' isDisabled={false} buttonTitle='Регистрация' onSubmit={handleSubmit(submitForm)} >
        <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                labelId='middleName'
                labelName='Фамилия'
                type='text'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                labelId='userName'
                labelName='Имя'
                type='text'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="midName"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                labelId='middleName'
                labelName='Отчество'
                type='text'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                labelId='userEmail'
                labelName='Электронная почта'
                type='email'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                labelId='userPassword'
                labelName='Пароль'
                type='password'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="passwordTo"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                labelId='userPasswordTo'
                labelName='Подтвердить пароль'
                type='password'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
        </Form>
        <AdditionalForm link='/login' linkMessage='Войдите' text='У вас уже есть аккаунт?' />
      </div>
    </section>
  )
}
