import { render, screen } from '@testing-library/react'
import LandingPage from '@/components/landing-page'

describe('Social proof', () => {
  it('shows both testimonials by name', () => {
    render(<LandingPage />)
    expect(screen.getByText(/Sarah Jenkins/)).toBeInTheDocument()
    expect(screen.getByText(/Mike Thompson/)).toBeInTheDocument()
  })
  it('shows the "just a truck" headline', () => {
    const { container } = render(<LandingPage />)
    expect(container.textContent).toContain('JUST A TRUCK.')
  })
  it('renders the four bullet points', () => {
    render(<LandingPage />)
    expect(screen.getByText(/Real people answer the phone/)).toBeInTheDocument()
    expect(screen.getByText(/No automated runaround/)).toBeInTheDocument()
    expect(screen.getByText(/Direct communication with drivers/)).toBeInTheDocument()
    expect(screen.getByText(/Local expertise on permit requirements/)).toBeInTheDocument()
  })
})
