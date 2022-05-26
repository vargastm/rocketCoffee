import logoDesktop from '../../assets/logo-desktop.svg'

import { Container, Navigation } from "./styles";

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
        <button>Pegar meu café</button>
      </Navigation>
    </Container>
  )
}