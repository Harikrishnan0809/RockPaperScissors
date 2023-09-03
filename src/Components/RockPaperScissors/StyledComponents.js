import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`
export const InprogressContainer = styled.ul`
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0px;
  justify-content: center;
  @media screen (min-width: 768px) {
    width: 450px;
  }
`

export const ResultViewContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen (min-width: 768px) {
    width: 450px;
  }
`

export const GameProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NameProfile = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 22px;
`

export const ImageProfile = styled.img`
  width: 130px;
`

export const StatusHeading = styled.p`
  font-size: 40px;
  color: #ffffff;
  font-family: 'Roboto';
`

export const PlayAgainButton = styled.button`
  font-size: 15px;
  padding: 15px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  color: #223a5f;
  font-family: 'Bree Serif';
`

export const PopupContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 350px;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`

export const PopupImage = styled.img`
  width: 300px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 460px;
  }
`

export const PopupCloseButton = styled.button`
  align-self: flex-end;
  border: none;
  outline: none;
  cursor: pointer;
  width: 35px;
  height: 30px;
  font-size: 20px;
  margin: 10px;
`
export const RulesButton = styled.button`
  align-self: flex-end;
  padding: 10px;
  width: 80px;
  color: #223a5f;
  font-family: 'Bree Serif';
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`
