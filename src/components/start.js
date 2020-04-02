import React, { useState, useEffect } from "react"
import styled from "styled-components"

const LoadingPage = styled.div`
  background: #0d0d0d;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Counter = styled.div`
  text-align: center;
  position: relative;
  width: 200px;
`

const LoadingText = styled.p`
  font-size: 40px;
  font-weight: 100;
  color: #f60d54;
`

const LoadingTitle = styled.h1`
  color: white;
  font-size: 60px;
  margin-top: -10px;
`

const LoadingBar = styled.hr`
  background: #f60d54;
  border: none;
  height: 1px;
  width: ${({ barProgress }) => barProgress}%;
`

export const Start = props => {
  const [counter, setCounter] = useState(0)

  const finishLoading = () => {
    props.parentCallback(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1)
      if (counter === 101) {
        clearInterval(interval)
        finishLoading()
      }
      console.log(counter)
    }, 50)
  }, [])

  return (
    <LoadingPage>
      <Counter>
        <LoadingText>Loading</LoadingText>
        <LoadingTitle>{counter}%</LoadingTitle>
        <LoadingBar barProgress={counter} />
      </Counter>
    </LoadingPage>
  )
}
