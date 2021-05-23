# Dropdown ⬇️
> Passfort UX Engineer tech test

For ease, to view the dropdown component I have hosted this app @ https://aaron-passfort-ux-engineer-tech-test.netlify.app/ so you can quickly see it in action with the given `assignees.json` data.

- You can find the component in `components/Dropdown.js`
- You can find the tests in `components/Dropdown.test.js`
- You can find the matching storybook in `components/Dropdown.stories.js`

## Useful Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn storybook`

I saw in the job description that working with storybook was desirable. Although I haven't used it much in the past I thought it'd be cool to give it a go for this project!

## Usage

### Basic
```js
<Dropdown
    label={`Assign Item:`}
    options={[
        { name: 'Andy', id: 1 },
        { name: 'George', id: 2 },
        { name: 'Clive', id: 3 },
        { name: 'Peter', id: 4 },
        { name: 'Cleatus', id: 5 },
    ]}
    onChange={(option) => console.log(`option`, option)}
/>
```

### Props
- `label` *String* - The text to appear above the dropdown.
- `options` *Array* - The options you want to display in the dropdown. Must be an array of objects containing `name` and `id` keys.
- `onChange` *Func* - Subscribe to change events. When a new option is selected, value object is passed through.
- `selectedBg` *String* - The background colour of the individual selected in the dropdown list.
- `value` *Object* - Default selected option of the dropdown if you wish to manually set one. Must be an object containing `name` and `id` keys.

## Testing
For my tests I used (React Testing Library)[https://testing-library.com/docs/react-testing-library/intro/]. I made the following passing tests:

1. Dropdown renders ☑️
2. Label appears correctly when supplied as a prop ☑️
3. The list of options a appear when the main dropdown button is initially clicked on ☑️
4. There is search functionality when the length of the options array supplied as a prop is >= 10 ☑️
5. There is no search functionality when the length of the options array supplied as a prop is < 10 ☑️
6. When an option is selected, the main drodown button shows this value correctly ☑️
7. The list of options closes if it is open and the main dropdown button is clicked ☑️
8. The options supplied as a prop are rendered correctly ☑️
9. Search functionality works as expected ☑️

## ⏲️ Further Work
- Close the dropdown when clicking outside of dropdown/esc key press
- Could have also made it such that the dropdown dispaly was `absolute` and therefore would not effect the position of other elements on the page
