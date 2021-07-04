import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import UsersComponent from '../UsersComponent'

afterEach(() => {
  cleanup()
})

test('renders JobsComponent', () => {
  render(<UsersComponent/>)
  const jobElement = screen.getByTestId('usersComponent')
  expect(jobElement).toBeInTheDocument()
  expect(jobElement).toHaveTextContent('Users Component')
})
