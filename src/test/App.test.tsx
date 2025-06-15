import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should fail intentionally', () => {
    render(<App />)
    // Este test fallará porque estamos buscando un texto que no existe
    expect(screen.getByText('Este texto no existe')).toBeInTheDocument()
  })
}) 