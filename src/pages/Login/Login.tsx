import React from 'react';
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { AdditionalForm } from '../../components/ShadowBox/AdditionalForm';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { login, setUserData } from '../../store/actions/actionLogin';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { TLoginReq, TLoginRes } from '../../types/authType';
import { sha256 } from 'js-sha256';
import styles from './Login.module.css'
import { selectors } from '../../store/selectors';


export const Login = () => {

  const dispatch = useAppDispatch();

  //get data from error in storage
  const errorMessage = useAppSelector(selectors.errorMesage)

  //checking data in local storage
  const storageName = useAppSelector(selectors.storageName);
  const localData = localStorage.getItem(storageName);
  if (localData) {
    const data: TLoginRes = JSON.parse(localData);
    dispatch(setUserData(data))
  }

  const { reset, handleSubmit, control, formState: { errors, isValid } } = useForm<TLoginReq>({ mode: 'onBlur', defaultValues: { login: '', password: '' } });

  const submitForm: SubmitHandler<TLoginReq> = async (data) => {
    //password encryption
    const result = sha256(data.password)
    //send user data
    const newData = { ...data, password: result }
    dispatch(login(newData, storageName))
    // reset()
  }

  return (
    <section className={styles.login}>
      <div className={styles.formWrap}>
        <Form type='submit' title='Войти' buttonTitle='Войти' isDisabled={!isValid} errorMessage={errorMessage} onSubmit={handleSubmit(submitForm)} >
          <Controller
            control={control}
            name="login"
            rules={{
              required: 'Логин обязательн для заполнения',
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                labelId='email'
                labelName='Логин'
                type='text'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                errorMessage={errors.login?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Пароль обязателен для заполнения',
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                labelId='password'
                labelName='Пароль'
                type='password'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                errorMessage={errors.password?.message}
              />
            )}
          />
        </Form>
        <AdditionalForm link='/registration' linkMessage='Зарегистрируйтесь' text='Ещё нет аккаунта?' />
      </div >
    </section>
  )
}
