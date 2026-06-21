import { Container } from '@/bootstrap/bs/Layout/Container'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavbarCollapse,
  NavbarNav,
} from '@/bootstrap/bs/Navbar'
import { NavLink } from '@/bootstrap/bs/Components/Nav'
import { Icon } from '@/bootstrap/bi/Icon'

export function Header(): any {
  return (
    <Navbar as='header' expand='sm' theme='dark' bg='dark'>
      <Container fluid>
        <NavbarBrand>Barely-react</NavbarBrand>
        <NavbarToggler />
        <NavbarCollapse>
          <NavbarNav as='nav'>
            <NavLink>TODO</NavLink>
            <NavLink>TODO</NavLink>
          </NavbarNav>
          <hr className='text-white d-sm-none' />
          <NavbarNav as='nav' className='ms-sm-auto'>
            <NavLink
              href='https://github.com/wareset/barely-react'
              target='_blank'
              rel='noopener'
            >
              <Icon name='github' />
              <small className='d-sm-none ms-2'>Github</small>
            </NavLink>
          </NavbarNav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}
