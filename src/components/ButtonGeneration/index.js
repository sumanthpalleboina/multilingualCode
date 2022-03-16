import {ItemButton, ButtonLag} from './styledComponents'

const ButtonGeneration = props => {
  const {Btn, active, tabChange} = props
  const {buttonText} = Btn
  const clickTab = () => {
    tabChange(Btn)
  }
  return (
    <ItemButton>
      <ButtonLag type="button" active={active} onClick={clickTab}>
        {buttonText}
      </ButtonLag>
    </ItemButton>
  )
}
export default ButtonGeneration
