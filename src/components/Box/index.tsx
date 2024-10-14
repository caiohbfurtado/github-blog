import { ReactNode } from 'react'
import { BoxContainer } from './styles'

type BoxProps = {
  children: ReactNode
}

export function Box({ children }: BoxProps) {
  return <BoxContainer>{children}</BoxContainer>
}
