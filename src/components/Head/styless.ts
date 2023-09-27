'use client'
import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.header`
  background-color: #000;
  color: #fff;

  a {
    color: #fff;
  }
`

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const Li = styled.li`
  display: inline;
  margin-right: 30px;
  transition: 0.5s;
  a {
    text-decoration: none;
  }

  :hover {
    color: crimson;
    cursor: pointer;
  }
`

export const Button = styled.li`
  font-size: 25px;
  background: none;
  color: #fff;
  display: none;
  border: none;
`

export const Navbar = styled.nav`
  position: absolute;
  display: block;
  background-color: #836fff;
  left: 0;
  transition: 0.5s;
  width: 100%;
  height: 5rem;
  padding: 1.5rem;
`
