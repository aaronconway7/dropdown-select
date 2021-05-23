import styled, { createGlobalStyle } from 'styled-components'

import Dropdown from './components/Dropdown'
import assignees from './data/assignees'

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
