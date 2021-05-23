import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaSort } from 'react-icons/fa'

const Dropdown = ({ label, options = [], onChange, selectedBg, value }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [optionsShowing, setOptionsShowing] = useState(options)
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState(value)

    useEffect(() => {
        if (options.length > 0) {
            setOptionsShowing(
                options
                    .filter((option) =>
                        option.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .sort((a, b) => a.name.localeCompare(b.name))
            )
        }
    }, [search, options])

    const handleSearch = (e) => {
        const value = e.target.value
        setSearch(value)
    }

    const handleOptionSelect = (option) => {
        setSelected(option)
        setIsOpen(false)
        onChange && onChange(option)
    }

    return (
        <Select data-testid={`dropdown-component`}>
            {label && (
                <span className={`select-label`} data-testid={`label`}>
                    {label}
                </span>
            )}
            <SelectButton
                className={`select`}
                data-testid={`select-button`}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {selected ? selected.name : `Select`}
                <FaSort className={`icon`} />
            </SelectButton>
            {isOpen && (
                <div className={`dropdown`} data-testid={`dropdown`}>
                    {options.length >= 10 && (
                        <div className={`search`} data-testid={`search`}>
                            <input
                                type={`search`}
                                data-testid={`search-input`}
                                placeholder={`Search for a user`}
                                value={search}
                                onChange={handleSearch}
                            />
                        </div>
                    )}
                    {optionsShowing.length === 0 ? (
                        <p className={`empty-msg`}>No options found.</p>
                    ) : (
                        <ul>
                            {optionsShowing.map((option) => (
                                <li key={option.id}>
                                    <OptionButton
                                        className={`option`}
                                        onClick={() =>
                                            handleOptionSelect(option)
                                        }
                                        isSelected={selected?.id === option.id}
                                        selectedBg={selectedBg}
                                    >
                                        {option.name}
                                    </OptionButton>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </Select>
    )
}

export default Dropdown

const Select = styled.div`
    --grey: #dadee9;
    --dark-grey: #9da0a5;
    --border: 2px solid var(--grey);
    --shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    --padding: 0.7em 1em;
    --primary-bg: #ffffff;

    width: 350px;

    .select-label {
        text-transform: uppercase;
        color: var(--dark-grey);
        font-weight: 600;
        display: inline-block;
        margin-bottom: 10px;
        font-size: 0.9em;
    }

    .dropdown {
        background-color: var(--primary-bg);
        border: var(--border);
        margin-top: 5px;
        box-shadow: var(--shadow);

        .search {
            padding: 10px;
            border-bottom: var(--border);

            input[type='search'] {
                width: 100%;
                border-radius: 0.4em;
                padding: var(--padding);
                border: var(--border);
                font-size: inherit;

                &::placeholder {
                    color: var(--dark-grey);
                }
            }
        }

        .empty-msg {
            padding: var(--padding);
            margin: 0;
            font-size: 0.9em;
            color: var(--dark-grey);
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            max-height: 300px;
            overflow-y: auto;

            li {
                margin: 0;

                &:last-child {
                    .option {
                        border-bottom: none;
                    }
                }
            }
        }
    }
`

const Button = styled.button`
    background-color: var(--primary-bg);
    padding: var(--padding);
    text-align: left;
    width: 100%;
    cursor: pointer;
    font-size: inherit;
    color: #48494c;
`

const SelectButton = styled(Button)`
    border: var(--border);
    border-radius: 0.4em;
    box-shadow: var(--shadow);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
        color: var(--dark-grey);
        font-size: 0.7em;
    }
`

const OptionButton = styled(Button)`
    --selected-colour: #f3f4f3;
    border: none;
    border-bottom: var(--border);
    background-color: ${({ isSelected, selectedBg }) =>
        isSelected && (selectedBg ? selectedBg : `var(--selected-colour)`)};
    pointer-events: ${({ isSelected }) => isSelected && `none`};

    &:hover {
        background-color: var(--selected-colour);
    }
`
