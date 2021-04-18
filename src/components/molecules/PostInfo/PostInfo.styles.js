import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    position: absolute;
    top: 2rem;
    right: 2rem;
    display: flex;
    justify-content: space-between;
    width: 17%;
    height: fit-content;
`;

export const StyledLink = styled(Link)`
    width: fit-content;
    height: ${({ theme }) => theme.buttonSize.lg};
    background-color: ${({ theme }) => theme.colors.blue};
    border: 2px solid ${({ theme }) => theme.colors.grey};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.md};
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    line-height: 0;
    outline: none;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.colors.black};
        border-color: ${({ theme }) => theme.colors.black};
    }
`;

export const StyledMessage = styled.p`
    margin-top: 2rem;
    text-align: justify;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
`;
