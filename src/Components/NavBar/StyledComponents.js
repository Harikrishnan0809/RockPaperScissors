import styled from 'styled-components'

export const Nav = styled.nav`
  width: 95%;
  border: solid 2px #ffffff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
export const UnOrderList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  margin: 0px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  width: 100px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`

export const ScoreName = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0px;
`

export const ScoreNum = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
  margin-top: 0px;
  font-weight: 700;
`
