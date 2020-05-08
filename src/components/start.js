import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components"

const LoadingPage = styled.div`
  background: #0d0d0d;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
font-family: 'Montserrat', sans-serif;

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
  margin-top: 10px;
`

const LoadingBar = styled.hr`
  background: #f60d54;
  border: none;
  height: 1px;
  margin-top: 10px;
  width: ${({ barProgress }) => barProgress}%;
`


export const Start = ({parentCallback}) => {
  const [counter, setCounter] = useState(0)

  const finishLoading = useCallback(() => {
    parentCallback(false)
  }, [parentCallback])

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1)
    }, 10)

    if (counter === 100) {
      finishLoading()
    }

    return () => clearInterval(interval)
  }, [counter, finishLoading])

  return (
    <LoadingPage>
      <Counter>
        <LoadingText>Tania Portfolio</LoadingText>
        <LoadingTitle>{counter}%</LoadingTitle>
        <LoadingBar barProgress={counter} />
      </Counter>
    </LoadingPage>
  )
}
