import styled from 'styled-components'

export const Container = styled.header`
  width: 918px;
  margin: auto;
`

export const Navigation = styled.nav`
  margin: 50px 0 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;


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
    background: none;
    color: var(--text-color);

    text-transform: uppercase;
    font-weight: 800;
    font-size: 0.6875rem;

    height: 100%;
    padding: 11px 38px;

    border: 1px solid var(--button);
    border-radius: 6px;

    cursor: pointer;
  }
`