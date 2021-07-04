import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import EventsForm from '../EventsForm'

afterEach(() => {
  cleanup()
})

test('renders EventsForm', () => {
  render(<EventsForm/>)
  const jobElement = screen.getByTestId('eventsForm')
  expect(jobElement).toBeInTheDocument()
  expect(jobElement).toHaveTextContent('Events Form')
})
