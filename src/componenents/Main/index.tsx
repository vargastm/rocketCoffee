import rocketCoffeeImg from '../../assets/img-coffee.png'
import { Container } from './styles'

export function Main() {
  return(
    <Container>
      <h1>Great Coffee<span>&lt;Great Code/&gt;</span></h1>
      <img src={rocketCoffeeImg} alt="Rocket Coffee" />
    </Container>
  )
}