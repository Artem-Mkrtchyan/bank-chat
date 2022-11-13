import React from 'react';
import { Link } from 'react-router-dom'
import styles from './AdditionalForm.module.css'

type TProps = {
  link: string
  linkMessage: string
  text: string
}

export const AdditionalForm: React.FC<TProps> = ({ link, text, linkMessage }) => {
  return (
    <div className={styles.shadowBox}>
      <span className={styles.formAdditionalMessage}>
        <span>{text}</span>
        <Link to={link}>{linkMessage}</Link>
      </span>
    </div>
  )
}
