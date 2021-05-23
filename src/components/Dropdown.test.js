import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Dropdown from './Dropdown'
import assingees from '../data/assignees'

describe(`Dropdown`, () => {
    describe(`with >= 10 options`, () => {
        beforeEach(() => {
            render(<Dropdown label={`Assignee:`} options={assingees} />)
        })

        test(`renders dropdown`, () => {
            const dropdownComponent = screen.getByTestId(`dropdown-component`)
            expect(dropdownComponent).toBeInTheDocument()
        })

        test(`expect dropdown to show correct label when given as a prop`, () => {
            const labelElement = screen.getByTestId(`label`)
            expect(labelElement.textContent).toBe(`Assignee:`)
        })

        test(`expect dropdown to open when main select button is clicked`, () => {
            userEvent.click(screen.getByTestId(`select-button`))
            const dropdownElement = screen.getByTestId(`dropdown`)
            expect(dropdownElement).toBeInTheDocument()
        })

        test(`expect there to be an option to search if length of options is >= 10`, () => {
            userEvent.click(screen.getByTestId(`select-button`))
            const searchElement = screen.queryByTestId(`search`)
            expect(searchElement).toBeInTheDocument()
        })

        test(`expect dropdown to show correct option when selected`, () => {
            userEvent.click(screen.getByTestId(`select-button`))
            userEvent.click(screen.getByText(`Dave`))
            const selectElement = screen.getByTestId(`select-button`)
            expect(selectElement.textContent).toBe(`Dave`)
        })

        test(`expect dropdown to close once option is selected`, () => {
            userEvent.click(screen.getByTestId(`select-button`))
            userEvent.click(screen.getByText(`Dave`))
            const dropdownElement = screen.queryByTestId(`dropdown`)
            expect(dropdownElement).not.toBeInTheDocument()
        })

        test(`expect dropdown to render options correctly`, () => {
            userEvent.click(screen.getByTestId(`select-button`))
            assingees.forEach((a) => {
                expect(screen.getByText(a.name)).toBeInTheDocument()
            })
        })

        test(`expect search functionality to filter options correctly`, () => {
            userEvent.click(screen.getByTestId(`select-button`))
            const searchElement = screen.queryByTestId(`search-input`)
            userEvent.type(searchElement, `Dave`)
            assingees.forEach((a) => {
                if (a.name === `Dave`) {
                    expect(screen.getByText(`Dave`)).toBeInTheDocument()
                } else {
                    expect(screen.queryByTestId(a.name)).not.toBeInTheDocument()
                }
            })
        })
    })

    describe(`with <10 options`, () => {
        test(`expect there to be no option to search if length of options is < 10`, () => {
            render(
                <Dropdown
                    label={`Assignee:`}
                    options={assingees.splice(0, 9)}
                />
            )
            userEvent.click(screen.getByTestId(`select-button`))
            const searchElement = screen.queryByTestId(`search`)
            expect(searchElement).not.toBeInTheDocument()
        })
    })
})
