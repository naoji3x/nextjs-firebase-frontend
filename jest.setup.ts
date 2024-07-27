import '@testing-library/jest-dom'

// jest.setup.ts
const originalWarn = console.warn
const originalError = console.error

beforeAll(() => {
  const reactFormActionWarning =
    'Warning: Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior %s'
  console.warn = (...args) => {
    if (args[0].includes(reactFormActionWarning)) {
      return
    }
    originalWarn.call(console, ...args)
  }

  console.error = (...args) => {
    if (args[0].includes(reactFormActionWarning)) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.warn = originalWarn
  console.error = originalError
})
