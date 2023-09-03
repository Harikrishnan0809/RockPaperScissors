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
      <ListButtons data-testid={`${details.id.toLowerCase()}Button`}>
        <ButtonImage onClick={onClickButton} src={imageUrl} alt={id} />
      </ListButtons>
    </ListButtonsContainer>
  )
}

export default RockPaperScissorsItem
