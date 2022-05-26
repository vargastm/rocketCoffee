import styled from 'styled-components'

export const Container = styled.main`
  width: 57.375rem;
  height: calc(100vh - 8.75rem);
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
      text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button), -1px 1px 0 var(--button), 1px 1px 0 var(--button);
    }
  }

  img {
    height: 100%;
    max-height: 37.5rem;
  }
`