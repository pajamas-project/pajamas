import { Card as MUICard, CardContent, CardHeader, Divider } from '@mui/material'
import React, { forwardRef } from 'react'

export interface CardProps {
  title?: string
  children?: React.ReactNode
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ children, title, ...other }, ref) => (
  <MUICard ref={ref} sx={{ borderRadius: 3 }} {...other}>
    {title && <CardHeader title={title} />}

    {title && <Divider />}

    <CardContent>{children}</CardContent>
  </MUICard>
))

Card.displayName = 'Card'
