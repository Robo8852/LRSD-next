import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LandingPage from '@/components/landing-page'

describe('Mobile menu', () => {
  it('is closed by default (CALL NOW not visible)', () => {
    render(<LandingPage />)
    expect(screen.queryByText(/^CALL NOW$/)).toBeNull()
  })

  it('opens when the hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<LandingPage />)
    const toggle = screen.getAllByRole('button').find((b) =>
      (b as HTMLElement).className.includes('md:hidden'),
    )
    expect(toggle).toBeTruthy()
    await user.click(toggle!)
    expect(await screen.findByText(/^CALL NOW$/)).toBeInTheDocument()
  })
})
