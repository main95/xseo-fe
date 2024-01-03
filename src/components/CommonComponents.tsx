import { ReactNode } from 'react'
import { Grid } from '@chakra-ui/react'

type PageWrapperProps = {
  children: ReactNode
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <Grid
      templateAreas={`"table detail"`}
      gridTemplateRows={'1fr'}
      gridTemplateColumns={'3fr 2fr'}
      h='100%'
      gap='2'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      {children}
    </Grid>
  )
}


type PageTablesWrapperProps = {
  children: ReactNode
}

export const PageTablesWrapper = ({ children }: PageTablesWrapperProps) => {
  return (
    <Grid
      templateAreas={`"table stats"
                      "table detail"`}
      gridTemplateRows={'1fr 2fr'}
      gridTemplateColumns={'3fr 2fr'}
      h='100%'
      gap='2'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      {children}
    </Grid>
  )
}
