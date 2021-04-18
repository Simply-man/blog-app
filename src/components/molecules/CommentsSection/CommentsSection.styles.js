import styled from "styled-components";

export const StyledComments = styled.div`
    width: 100%;
    margin-top: 4rem;
`;

export const StyledCommentSection = styled.div`
    width: 100%;
    height: fit-content;
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.grey};
    border-radius: 3px;
    text-align: left;
    padding: 2rem;
    margin: 1rem auto;
`;

export const StyledComment = styled.p``;
export const StyledButton = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: 0;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.blue};
    outline: none;

    &:hover {
        color: ${({ theme }) => theme.colors.error};
    }
`;
