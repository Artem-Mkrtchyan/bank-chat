import React, { FormHTMLAttributes } from 'react';
import { Button } from '../Button/Button';
import { ErrorForm } from '../ErrorForm/ErrorForm';
import styles from './Form.module.css'

interface IPropsForm extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode,
  title: string
  buttonTitle: string
  type: 'submit' | 'reset' | "button" | undefined
  isDisabled: boolean
  errorMessage?: string
}

export const Form: React.FC<IPropsForm> = ({children, isDisabled, title, buttonTitle, type, errorMessage, ...props}) => {

  return (
    <form className={styles.form} {...props}>
      <h2 className={styles.formTitle}>{title}</h2>
      <ul className={styles.inputList}>
        {children}
      </ul>
      <Button disabled={isDisabled} type={type} value={buttonTitle} variant="primary" />
      {errorMessage && <ErrorForm message={errorMessage} />}
    </form>
  )
}
