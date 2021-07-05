import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import CompaniesForm from '../CompaniesForm'

afterEach(() => {
  cleanup()
})

test('renders CompaniesForm', () => {
  render(<CompaniesForm/>)
  const jobElement = screen.getByTestId('companiesForm')
  expect(jobElement).toBeInTheDocument()
  expect(jobElement).toHaveTextContent('Companies Form')
})
