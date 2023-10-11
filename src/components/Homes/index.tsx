import React from "react"
import Popular from "../MainContent"
import Side from 'components/Side'
import { Container, MainContent, SideContent } from './styles'

const Homes = () => {
  return (
    <>
      <main>
        <Container>
          <MainContent>
            <Popular/>
          </MainContent>
          <SideContent>
            <Side/>
          </SideContent>
        </Container>
      </main>
    </>
  )
}

export default Homes
