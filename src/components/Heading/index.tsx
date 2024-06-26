import React from "react"
import { Container } from './styles'

const Heading = ({ title }) => {
  return (
    <>
      <Container>
        <h6>{title}</h6>
      </Container>
    </>
  )
}

export default Heading
