import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import CompaniesComponent from '../CompaniesComponent'

afterEach(() => {
  cleanup()
})

test('renders CompaniesComponent', () => {
  render(<CompaniesComponent/>)
  const jobElement = screen.getByTestId('companiesComponent')
  expect(jobElement).toBeInTheDocument()
  expect(jobElement).toHaveTextContent('Companies Component')
})
