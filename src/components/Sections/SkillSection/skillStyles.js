import { styled } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    margin-bottom: 3rem;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};

    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    gap: 50px;
`;


export const Skill = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: rgba(17, 25, 40, 0.83);
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 16px;
    padding: 18px 36px;

    @media (max-width: 768px) {
        max-width: 330px;
        padding: 10px 36px;
    }
`;

export const SkillTitle = styled.div`
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

export const SkillList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
`;

export const SkillItem = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 80};
    border: 1px solid ${({ theme }) => theme.text_primary + 80};
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px 12px;
    }

    @media (max-width: 500px) {
        font-size: 14px;
        padding: 6px 12px;
    }
`;

export const SkillImage = styled.img`
    width: 48px;
    height: 48px;
    /* margin-right: 8px; */
`;
