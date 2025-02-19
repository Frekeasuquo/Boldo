

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Some from '../components/Logo';
 
describe('Home', () => {
  it('should contains the heading 1', () => {
    render(<Some />)
 
    const heading = screen.getByText(/Bold/i)
 
    expect(heading).toBeInTheDocument()
  })
})