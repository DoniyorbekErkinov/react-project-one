import React from 'react'
import classes from './MyModal.module.css'
function MyModal({ children, modal, setModal }) {
    const modalClasses = [classes.myModal]

    if (modal) {
        modalClasses.push(classes.active)
        console.log(modalClasses)
    }
  return (
    <div className={modalClasses.join(" ")}>
          <div className={classes.myModalContent}>
              {children}
          </div>
    </div>
  )
}
export default MyModal