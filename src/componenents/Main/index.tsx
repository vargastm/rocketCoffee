import rocketCoffeeImg from '../../assets/img-coffee.png'
import { TakeCoffeeButton } from '../TakeCoffeeButton'
import { Container } from './styles'

export function Main() {
  return(
    <Container>
      <div className='mobile'>
        <h2>O café que fará seu código decolar para o próximo nível.</h2>
      </div>
      <TakeCoffeeButton/>
      <h1>Great Coffee<span>&lt;Great Code/&gt;</span></h1>
      <img src={rocketCoffeeImg} alt="Rocket Coffee" />
    </Container>
  )
}