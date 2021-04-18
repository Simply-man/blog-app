import styled from "styled-components";

export const Wrapper = styled.div`
    width: 20rem;
    border: 2px solid ${({ theme }) => theme.colors.grey};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    text-align: left;
    padding: 1rem;
    margin: 2rem 0.5rem 0.5rem 0.5rem;
    position: relative;
`;

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
`;

export const StyledLink = styled.a`
    fonst-size: 1.1rem;
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.blue};
        text-decoration: underline;
    }
`;

export const StyledData = styled.span`
    fonst-size: 1.1rem;
    color: grey;
`;
