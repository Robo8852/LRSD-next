import { render, screen } from '@testing-library/react'
import LandingPage from '@/components/landing-page'

describe('Trust bar', () => {
  it('shows all three trust items', () => {
    render(<LandingPage />)
    expect(screen.getByText(/^LICENSED & INSURED$/)).toBeInTheDocument()
    expect(screen.getByText(/^EXPERT TEAM$/)).toBeInTheDocument()
    expect(screen.getByText(/^100% SATISFACTION$/)).toBeInTheDocument()
  })
})
