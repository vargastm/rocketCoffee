import { Background } from './componenents/Background'
import { Header } from './componenents/Header'
import { Main } from './componenents/Main'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <>
      <Background/>
      <Header/>
      <Main/>
      <GlobalStyle />
    </>
  )
}