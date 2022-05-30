import styled from 'styled-components'

export const Container = styled.header`
  width: 57.375rem;
  margin: auto;

  @media (max-width:1080px) {
    width: 700px;
  }

  @media (max-width:800px) {
    width: 100%;
  }
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
  }

  @media (max-width:800px) {
    display: none;
  }
`
export const NavigationMobile = styled.nav`
  display: none;
  justify-content: space-between;
  margin: 40px 25px;

  @media (max-width:800px) {
    display: flex;
  }
`