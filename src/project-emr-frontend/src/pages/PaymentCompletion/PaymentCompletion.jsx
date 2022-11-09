import React from 'react'
import CheckIcon from '@mui/icons-material/Check'; 
import { Box } from '@mui/material';

const PaymentCompletion = () => {
  return (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
          <CheckIcon />
    </Box>
  )
}

export default PaymentCompletion