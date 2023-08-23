import React from "react"
import Popular from "../MainContent"
import "./style.css"
import Side from 'components/Side'

const Homes = () => {
  return (
    <>
      <main>
        <div className='container'>
          <section className='mainContent'>
            <Popular />
          </section>
          <section className='sideContent'>
            <Side />
          </section>

        </div>
      </main>
    </>
  )
}

export default Homes
