import styled from 'styled-components'

export const Container = styled.main`
  width: 57.375rem;
  height: calc(100vh - 8.75rem);
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width:1080px) {
    width: 700px;
  }

  @media (max-width:800px) {
    width: 100%;
  }

  .mobile, button {
    display: none;

    @media (max-width:800px) {
      display: flex;
    }
  }

  .mobile h2 {
    max-width: 370px;
    display: flex;
    font-size: 2rem;
    color: var(--text-color);
    font-weight: 600;
    text-align: center;
  }

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text-color);
    font-weight: 700;
    font-size: 5rem;

    @media (max-width:800px) {
      font-size: 3.125rem;
    }

    span {
      display: block;
      color: #000;
      text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button), -1px 1px 0 var(--button), 1px 1px 0 var(--button);
    }
  }

  img {
    width: 100%;
    max-height: 37.5rem;
    z-index: 1;
  }
`