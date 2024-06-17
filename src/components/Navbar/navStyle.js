import { styled } from 'styled-components'

export const NavbarContainer = styled.div`
    width: 100%;
    max-width: 1400px;
    padding: 1 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
`

export const NavLogo = styled.a`
    padding: 0 6px;
    width: 80%;
    font-weight: 500;
    font-size: 18px;
    color: inherit;

`

export const Nav = styled.div`
    background-color: ${({ theme }) => theme.bg};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
    color: white;
    padding: 0 1rem;
`

export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:32px;
    list-style: none;
    padding: 0 6px;

    .navlink {
        list-style: none;
        text-decoration: none;
        color: ${({ theme }) => theme.text_primary};
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
            color: ${({ theme }) => theme.primary};
        }
    }

    @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ButtonContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 6px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const GithubButton = styled.a`
    border: 1px solid ${({ theme }) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    padding:  10px 20px;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    transition: all 0.4s ease-in-out;
    text-decoration: none;
    &:hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.text_primary};
    }
`

export const MobileIcon = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    display: none;
    @media screen and (max-width: 768px) {
        display: flex;
    }
`

export const MobileMenu = styled.div`
 width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light};
  position: absolute;
  top: 80px;
  right: 0;
  transition: transform 0.6s ease-in-out, 
  opacity 0.6s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

  .navlink {
    list-style: none;
    text-decoration: none;
    color: ${({ theme }) => theme.text_primary};
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;