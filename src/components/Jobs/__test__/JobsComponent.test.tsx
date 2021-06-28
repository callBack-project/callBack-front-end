import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import JobsComponent from '../JobsComponent'

afterEach(() => {
  cleanup()
})

test('renders JobsComponent', () => {
  render(<JobsComponent/>)
  const jobElement = screen.getByTestId('jobsComponent')
  expect(jobElement).toBeInTheDocument()
  expect(jobElement).toHaveTextContent('Jobs Component')
})
