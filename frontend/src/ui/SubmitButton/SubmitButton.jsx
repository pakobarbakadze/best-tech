import React from 'react'

import classes from './SubmitButton.module.css'

const SubmitButton = (props) => {
  return (
    <div className={classes.container}>
    <button>{props.text}</button>
    </div>
  )
}

export default SubmitButton