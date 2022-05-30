import logoDesktop from '../../assets/logo-desktop.svg'
import logoMobile from '../../assets/logo-mobile.svg'
import openMenuImg from '../../assets/menu-buguer-open.svg'
import { TakeCoffeeButton } from '../TakeCoffeeButton';

import { Container, Navigation, NavigationMobile } from "./styles";

export function Header() {
  return(
    <Container>
      <Navigation>
        <img src={logoDesktop} alt="Rocket Coffe" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Recompensas</a></li>
          <li><a href="#">Gift Cards</a></li>
          <li><a href="#">Lojas</a></li>
        </ul>
        <TakeCoffeeButton/>
      </Navigation>

      <NavigationMobile>
          <img src={logoMobile} alt='Rocket Coffe' />
          <img
            src={openMenuImg}
            alt='menu'
          />
      </NavigationMobile>
    </Container>
  )
}