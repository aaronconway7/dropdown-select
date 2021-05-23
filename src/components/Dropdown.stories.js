import React from 'react'

import Dropdown from './Dropdown'
import assingees from '../data/assignees'

export default {
    title: 'Dropdown',
    component: Dropdown,
    argTypes: {
        label: {
            control: 'text',
            description: `The text to appear above the dropdown.`,
            table: {
                type: { summary: `String` },
                defaultValue: { summary: `""` },
            },
        },
        options: {
            description: `Array of objects to display within the dropdown.`,
            table: {
                type: { summary: '[ { name: String, id: Int } ]' },
                defaultValue: { summary: `[]` },
            },
        },
        onChange: {
            description: `Function to subscribe to change events. When a new option is selected, value object is passed through.`,
            table: {
                type: { summary: `(value) => {}` },
            },
        },
        selectedBg: {
            control: 'color',
            description: `The background colour of the individual selected in the dropdown list.`,
            table: {
                type: { summary: `String` },
                defaultValue: { summary: `#f3f4f3` },
            },
        },
        value: {
            control: 'object',
            description: `Default of the dropdown if you wish to manually set one.`,
            table: {
                type: { summary: '{ name: String, id: Int }' },
            },
        },
    },
    args: {
        onChange: (value) => console.log(`value`, value),
    },
}

const Template = (args) => <Dropdown {...args} />

export const Default = Template.bind({})
Default.args = {}

export const SmallList = Template.bind({})
SmallList.args = {
    options: assingees.slice(0, 5),
}

export const LargeList = Template.bind({})
LargeList.args = {
    options: assingees,
}

export const Label = Template.bind({})
Label.args = {
    ...LargeList.args,
    label: `Assign Item:`,
}

export const Selected = Template.bind({})
Selected.args = {
    ...Label.args,
    value: assingees.find((a) => a.id === 7),
}

export const CustomSelectedColour = Template.bind({})
CustomSelectedColour.args = {
    ...Selected.args,
    selectedBg: `#83c503`,
}
