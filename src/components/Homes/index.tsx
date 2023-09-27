import React from "react"
import Popular from "../MainContent"
import "./style.css"
import Side from 'components/Side'

const Homes = () => {
  return (
    <>
      <main>
        <div className='container' key="homes">
          <section className='mainContent' key="seila">
            <Popular key="popular"/>
          </section>
          <section className='sideContent' key="sides">
            <Side key="side"/>
          </section>
        </div>
      </main>
    </>
  )
}

export default Homes
