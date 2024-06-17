import { styled } from 'styled-components';
export const BodyContainer = styled.div`
    background-color: ${({ theme }) => theme.bg};
    width: 100%;
    color: ${({ theme }) => theme.text_primary};
    height: 100vh;
    overflow-x: hidden;
    position: relative;
`;
