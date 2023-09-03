import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  BgContainer,
  InprogressContainer,
  ResultViewContainer,
  GameProfileContainer,
  ProfileContainer,
  NameProfile,
  ImageProfile,
  StatusHeading,
  PlayAgainButton,
  PopupContainer,
  PopupImage,
  PopupCloseButton,
  RulesButton,
} from './StyledComponents'
import NavBar from '../NavBar'

import RockPaperScissorsItem from '../RockPaperScissorsItems'

const constantStatus = {
  progress: 'PROGRESS',
  result: 'RESULT',
}

const constantGameStatus = {
  won: 'YOU WON',
  lose: 'YOU LOSE',
  draw: 'IT IS DRAW',
}

class RockPaperScissors extends Component {
  state = {
    userChoice: '',
    opponentChoice: '',
    status: constantStatus.progress,
    gameStatus: '',
    score: 0,
  }

  clickButtons = details => {
    this.setState(
      {
        userChoice: details,
        status: constantStatus.result,
        opponentChoice: this.getRandomLists(),
      },
      this.getResult,
    )
  }

  inProgressView = () => {
    const {choicesList} = this.props

    return (
      <InprogressContainer>
        {choicesList.map(eachItem => (
          <RockPaperScissorsItem
            key={eachItem.id}
            clickButtons={this.clickButtons}
            details={eachItem}
          />
        ))}
      </InprogressContainer>
    )
  }

  getRandomLists = () => {
    const {choicesList} = this.props
    const indexNumber = Math.floor(Math.random() * 3)
    return choicesList[indexNumber]
  }

  getRockResult = () => {
    const {opponentChoice, userChoice} = this.state
    console.log(userChoice.id, opponentChoice.id)
    switch (opponentChoice.id) {
      case 'ROCK':
        this.setState({gameStatus: constantGameStatus.draw})
        break
      case 'SCISSORS':
        this.setState(oldVal => ({
          gameStatus: constantGameStatus.won,
          score: oldVal.score + 1,
        }))
        break
      default:
        this.setState(preVal => ({
          gameStatus: constantGameStatus.lose,
          score: preVal.score - 1,
        }))
    }
  }

  getPaperResult = () => {
    const {opponentChoice, userChoice} = this.state
    console.log(userChoice.id, opponentChoice.id)
    switch (opponentChoice.id) {
      case 'ROCK':
        this.setState(oldVal => ({
          gameStatus: constantGameStatus.won,
          score: oldVal.score + 1,
        }))
        break
      case 'SCISSORS':
        this.setState(oldVal => ({
          gameStatus: constantGameStatus.lose,
          score: oldVal.score - 1,
        }))
        break
      default:
        this.setState({
          gameStatus: constantGameStatus.draw,
        })
    }
  }

  getScissorsResult = () => {
    const {opponentChoice, userChoice} = this.state
    console.log(userChoice.id, opponentChoice.id)
    switch (opponentChoice.id) {
      case 'ROCK':
        this.setState(oldVal => ({
          gameStatus: constantGameStatus.lose,
          score: oldVal.score - 1,
        }))
        break
      case 'SCISSORS':
        this.setState({
          gameStatus: constantGameStatus.draw,
        })
        break
      default:
        this.setState(oldVal => ({
          gameStatus: constantGameStatus.won,
          score: oldVal.score + 1,
        }))
    }
  }

  getResult = () => {
    const {userChoice} = this.state
    switch (userChoice.id) {
      case 'ROCK':
        this.getRockResult()
        break
      case 'PAPER':
        this.getPaperResult()
        break
      default:
        this.getScissorsResult()
    }
  }

  onPlayAgainButton = () => {
    this.setState({status: constantStatus.progress})
  }

  resultView = () => {
    const {gameStatus, userChoice, opponentChoice} = this.state
    console.log(gameStatus)
    return (
      <ResultViewContainer>
        <GameProfileContainer>
          <ProfileContainer>
            <NameProfile>YOU</NameProfile>
            <ImageProfile src={userChoice.imageUrl} alt="your choice" />
          </ProfileContainer>

          <ProfileContainer>
            <NameProfile>OPPONENT</NameProfile>
            <ImageProfile src={opponentChoice.imageUrl} alt="opponent choice" />
          </ProfileContainer>
        </GameProfileContainer>
        <StatusHeading>{gameStatus}</StatusHeading>
        <PlayAgainButton type="button" onClick={this.onPlayAgainButton}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultViewContainer>
    )
  }

  switchStatus = () => {
    const {status} = this.state
    switch (status) {
      case constantStatus.progress:
        return this.inProgressView()
      default:
        return this.resultView()
    }
  }

  render() {
    const {score} = this.state
    return (
      <BgContainer>
        <NavBar score={score} />
        {this.switchStatus()}
        <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
          {close => (
            <PopupContainer>
              <PopupCloseButton onClick={() => close()}>
                <RiCloseLine />
              </PopupCloseButton>
              <PopupImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupContainer>
          )}
        </Popup>
      </BgContainer>
    )
  }
}

export default RockPaperScissors
