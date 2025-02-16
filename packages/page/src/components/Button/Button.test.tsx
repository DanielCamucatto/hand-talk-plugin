import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '../../test/test-utils' 
import Button from './Button'

describe('Button Component', () => {
  it('renderiza corretamente com texto', () => {
    render(<Button name="Click me" />)
    
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it('chama onClick quando clicado', () => {
    const handleClick = vi.fn()
    render(<Button name="Click me" onClick={handleClick} />)
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('está desabilitado quando disabled é true', () => {
    render(<Button name="Desabilitado" disabled={true} />)
    
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('tem o tipo submit quando especificado', () => {
    render(<Button name="Enviar" type="submit" />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'submit')
  })
})