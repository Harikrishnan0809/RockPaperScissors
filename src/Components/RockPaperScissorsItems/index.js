import {
  ListButtonsContainer,
  ListButtons,
  ButtonImage,
} from './StyledComponents'

const RockPaperScissorsItem = props => {
  const {details, clickButtons} = props
  const {imageUrl, id} = details
  const onClickButton = () => {
    clickButtons(details)
  }
  return (
    <ListButtonsContainer>
      <ListButtons
        onClick={onClickButton}
        data-testid={`${details.id.toLowerCase()}Button`}
      >
        <ButtonImage src={imageUrl} alt={id} />
      </ListButtons>
    </ListButtonsContainer>
  )
}

export default RockPaperScissorsItem
