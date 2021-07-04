import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import InterviewExperiencesComponent from '../InterviewExperiencesComponent'

afterEach(() => {
  cleanup()
})

test('renders JobsComponent', () => {
  render(<InterviewExperiencesComponent/>)
  const jobElement = screen.getByTestId('interviewExperiencesComponent')
  expect(jobElement).toBeInTheDocument()
  expect(jobElement).toHaveTextContent('Interview Experiences Component')
})
