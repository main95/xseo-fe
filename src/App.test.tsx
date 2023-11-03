import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders XSeo app text', () => {
  render(<App />)
  const linkElement = screen.getByText(/XSeo app/i)
  expect(linkElement).toBeInTheDocument()
})
