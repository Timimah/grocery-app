import React from 'react'

export const Button = ({ title, onClick, styles }) => {
  return (
    <div>
        <button className={styles} onClick={onClick}>{title}</button>
    </div>
  )
}
