import styled from 'styled-components'

export const Container = styled.section``

export const Box = styled.div``

export const ImagesCover = styled.div`
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`

export const Images = styled.div`
  position: relative;
  height: 150px;
  width: 50%;
`

export const BoxShadow = styled.div`
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  position: relative;
  margin: 15px 15px 15px 0;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 15px 10px -10px;
`

export const Title = styled.h1`
  font-weight: 500;
  font-size: 17px;
  margin-right: 5px;
  margin-bottom: 15px;
`

export const Text = styled.div`
  width: 50%;

  h1 {
    padding: 15px 6px 0 20px;
    margin: 0;
  }
`

export const Date = styled.div`
  margin-top: 15px;
  padding: 5px 0 0 20px;
  display: flex;
  color: #836fff;

  svg {
    width: 17px;
  }
`

export const Comment = styled.div`
  border-top: 1px solid #836fff;
  padding: 7px 0 0 20px;
  margin-top: 10px;
  display: flex;
  color: #836fff;

  svg {
    width: 17px;
  }
`

export const Label = styled.label`
  margin-left: 5px;
  margin-top: 2px;
  color: rgb(134, 133, 133);
  font-size: 13px;
  font-weight: 500;
`

export const Category = styled.div`
  position: absolute;
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

  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
  padding: 5px 10px;
  letter-spacing: 2px;
  background-color: purple;

  &:hover {
    background-position: left bottom;
  }
`

export const CategoryLabel = styled.label`
  color: #fff;
  text-transform: capitalize;
  letter-spacing: 0;

  &:hover {
    color: #fff;
  }
`
