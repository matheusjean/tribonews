"use client"
import React, { useState } from "react"
import { hero } from "../../../data"
import Card from "../Card"
import {Container, Hero as HeroSection} from './styles'

const Hero = () => {
  const [items, setIems] = useState(hero)

  return (
    <>
      <HeroSection>
        <Container>
          {items.map((item) => {
            return (
              <div key={item.id}>
                <Card item={item}/>
              </div>
            )
          })}
        </Container>
      </HeroSection>
    </>
  )
}

export default Hero
