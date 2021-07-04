import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import EventsComponent from '../EventsComponent'

afterEach(() => {
  cleanup()
})

test('renders EventsComponent', () => {
  render(<EventsComponent/>)
  const jobElement = screen.getByTestId('eventsComponent')
  expect(jobElement).toBeInTheDocument()
  expect(jobElement).toHaveTextContent('Events Component')
})
