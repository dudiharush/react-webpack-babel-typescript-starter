import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import React from 'react'
import App from './App'
;[]
describe('App', () => {
  test('renders message', () => {
    const { getByText } = render(<App />)
    expect(getByText('React', { exact: false })).toBeInTheDocument()
  })
})
