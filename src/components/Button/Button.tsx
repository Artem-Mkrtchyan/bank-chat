import React, {ButtonHTMLAttributes} from 'react'
import classNames from 'classnames'
import styles from './Button.module.css'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'secondary' | 'primary' | 'text'
  type: 'submit' | 'reset' | "button" | undefined
  value: string
  onClick?: () => void
}

export const Button: React.FC<IButton> = ({value, variant, type}) => {

  const buttonClass = classNames({
    [styles.button]: true,
    [styles.button__primary]:  variant === 'primary',
    [styles.button__secondary]:  variant === 'secondary',

  })

  return (
    <button type={type} className={buttonClass}>
      <span className={styles.button__text}>
        {value}
      </span>
        {variant === 'secondary' && <i className={styles.fa}></i>}
    </button>
  )
}
