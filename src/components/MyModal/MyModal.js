import { Box } from '@material-ui/core'
import IconButton  from '@mui/material/IconButton'
import ClearSharp from '@mui/icons-material/ClearSharp';
import React from 'react'
import classes from './MyModal.module.css'
function MyModal({ children, modal, setModal }) {
    const modalClasses = [classes.myModal]

    if (modal) {
        modalClasses.push(classes.active)
  }

  return (
    <div className={modalClasses.join(" ")}>
      <Box>
          <div style={{display: 'flex', flexDirection: 'column'}} className={classes.myModalContent}>
        <IconButton onClick={() => setModal(false)} style={{alignSelf: 'flex-end', marginBottom: 5, marginTop: -25, marginRight: -25}}>
          <ClearSharp/>
        </IconButton>
              {children}
          </div>
      </Box>
    </div>
  )
}
export default MyModal
