import {Component} from 'react'

import ButtonGeneration from './components/ButtonGeneration'

import {
  Container,
  Heading,
  ButtonsContainer,
  GreetImage,
} from './styledComponents'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeTab: languageGreetingsList[0].id,
    activeObj: languageGreetingsList[0],
  }

  tabChange = object => {
    this.setState({
      activeTab: object.id,
      activeObj: object,
    })
  }

  render() {
    const {activeTab, activeObj} = this.state
    return (
      <Container>
        <Heading>Multilingual Greetings</Heading>
        <ButtonsContainer>
          {languageGreetingsList.map(each => (
            <ButtonGeneration
              key={each.id}
              Btn={each}
              active={activeTab === each.id}
              tabChange={this.tabChange}
            />
          ))}
        </ButtonsContainer>
        <GreetImage src={activeObj.imageUrl} alt={activeObj.imageAltText} />
      </Container>
    )
  }
}

export default App
