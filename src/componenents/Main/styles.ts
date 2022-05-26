import styled from 'styled-components'

export const Container = styled.main`
  width: 918px;
  height: calc(100vh - 140px);
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text-color);
    font-weight: 700;
    font-size: 5rem;

    span {
      display: block;
      color: #000;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: var(--button);
    }
  }

  img {
    height: 100%;
    max-height: 600px;
  }
`