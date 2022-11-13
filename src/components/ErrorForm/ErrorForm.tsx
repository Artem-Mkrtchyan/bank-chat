import React from 'react';
import styles from './Error.module.css'

type TError = {
  message?: string
}

export const ErrorForm: React.FC<TError> = ({message}) => {
  return (
    <p className={styles.error}>{message}</p>
  )
}
