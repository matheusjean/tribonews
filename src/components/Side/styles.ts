'use client'
import styled from 'styled-components'

export const SideAd = styled.section`
  margin: 30px 0;
`

export const Wrapper = styled.section``

export const Categories = styled.div`
  margin-bottom: 20px;
  padding: 15px;

  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 2px;
  background-color: purple;

  position: relative;
  top: 0;
  left: 0;
  border-left: 5px solid #836fff;
  width: auto;
  display: block;
  background: linear-gradient(to right, #836fff 50%, black 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  cursor: pointer;

  &:hover {
    background-position: left bottom;
  }

  span {
    color: #fff;
    text-transform: capitalize;
    letter-spacing: 0;

    &:hover {
      color: #fff;
    }
  }
`
