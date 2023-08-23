"use client"
import React, { useState } from "react"
import { hero } from "../../../data"
import "./hero.css"
import Card from "./Card"
import {Container, Hero as HeroSection} from './styles'

const Hero = () => {
  const [items, setIems] = useState(hero)

  return (
    <>
      <HeroSection>
        <Container>
          {items.map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            )
          })}
        </Container>
      </HeroSection>
    </>
  )
}

export default Hero
