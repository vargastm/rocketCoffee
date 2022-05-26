import styled from 'styled-components'

export const Container = styled.header`
  width: 57.375rem;
  margin: auto;
`

export const Navigation = styled.nav`
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    position: absolute;
    left: 0;
  }

  ul {
    display: flex;
    gap: 2rem;

    a {
      font-weight: 500;
      color: var(--text-color);
      font-size: 0.875rem;
    }
  }

  button {
    position: absolute;
    right: -2.375rem;

    background: none;
    color: var(--text-color);

    text-transform: uppercase;
    font-weight: 800;
    font-size: 0.6875rem;

    padding: 0.6875rem 2.375rem;

    border: 1px solid var(--button);
    border-radius: 6px;

    cursor: pointer;
  }
`