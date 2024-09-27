import { Button } from '@mui/material';
import React from 'react'

function FirstComponent() {
  return (
    <div>
      <Button variant="text">Classic</Button>
      <Button variant="contained">Casual</Button>
      <Button variant="outlined">Modern</Button>
    </div>
  )
}

export default FirstComponent