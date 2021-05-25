import { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Dropdown from './components/Dropdown'
import assignees from './data/assignees'

function App() {
    const [selected, setSelected] = useState()

    return (
        <LandingPage>
            <GlobalStyle />
            <Dropdown
                label={`Assign Item:`}
                options={assignees}
                onChange={(option) => setSelected(option)}
                value={selected}
                // selectedBg={`#83c503`}
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
