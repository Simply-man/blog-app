import styled from "styled-components";

export const Button = styled.button`
    width: fit-content;
    height: ${({ theme }) => theme.buttonSize.lg};
    background-color: ${({ theme, add, edit, cancel }) =>
        add
            ? theme.colors.blue
            : edit
            ? theme.colors.warning
            : cancel
            ? theme.colors.error
            : theme.colors.success};
    border: 2px solid ${({ theme }) => theme.colors.grey};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.md};
    padding: 1rem;
    text-align: center;
    cursor: pointer;
    line-height: 0;
    margin-top: ${({ addMarginTop }) => (addMarginTop ? "2rem" : "0")};
    outline: none;
    &:hover {
        color: ${({ theme }) => theme.colors.black};
        border-color: ${({ theme }) => theme.colors.black};
    }
`;
