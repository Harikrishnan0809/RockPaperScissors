import {
  Nav,
  Heading,
  ScoreContainer,
  ScoreName,
  ScoreNum,
} from './StyledComponents'

const NavBar = props => {
  const {score} = props
  return (
    <Nav>
      <Heading>
        ROCK
        <br />
        <br />
        PAPER
        <br />
        <br />
        SCISSORS
      </Heading>
      <ScoreContainer>
        <ScoreName>Score</ScoreName>
        <ScoreNum>{score}</ScoreNum>
      </ScoreContainer>
    </Nav>
  )
}

export default NavBar
