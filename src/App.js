import styled, { createGlobalStyle } from 'styled-components'

import Dropdown from './components/Dropdown'

const assignees = [
    { name: 'Andy', id: 1 },
    { name: 'George', id: 2 },
    { name: 'Clive', id: 3 },
    { name: 'Peter', id: 4 },
    { name: 'Cleatus', id: 5 },
    { name: 'Alex', id: 6 },
    { name: 'Omar', id: 7 },
    { name: 'Carl', id: 8 },
    { name: 'William', id: 9 },
    { name: 'Donald', id: 10 },
    { name: 'Dave', id: 11 },
    { name: 'Jerry', id: 12 },
    { name: 'Gerrie', id: 13 },
]

function App() {
    return (
        <LandingPage>
            <GlobalStyle />
            <Dropdown
                label={`Assign Item:`}
                options={assignees}
                onChange={(option) => console.log('option', option)}
                // selectedBg={`#83c503`}
                // value={{ name: 'William', id: 9 }}
            />
        </LandingPage>
    )
}

export default App

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #eceff1;
    font-family: Open Sans, Roboto, sans-serif;
  }
`

const LandingPage = styled.div`
    background-color: #eceff1;
    min-height: 100vh;
    display: grid;
    place-items: center;
    font-size: 18px;
`
