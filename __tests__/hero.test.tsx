import { render, screen } from '@testing-library/react'
import LandingPage from '@/components/landing-page'

describe('Hero', () => {
  it('renders the brutalist headline', () => {
    render(<LandingPage />)
    const { container } = render(<LandingPage />)
    expect(container.textContent).toContain('CLEAR THE CLUTTER WITH')
    expect(container.textContent).toContain('CONFIDENCE.')
  })
  it('renders the #1 Local Dumpster Rental badge', () => {
    render(<LandingPage />)
    expect(screen.getByText(/#1 Local Dumpster Rental/)).toBeInTheDocument()
  })
  it('renders both hero CTAs', () => {
    render(<LandingPage />)
    expect(screen.getByText(/Get Your Free Quote/)).toBeInTheDocument()
    expect(screen.getByText(/View Our Sizes/)).toBeInTheDocument()
  })
})
