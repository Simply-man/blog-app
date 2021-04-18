import styled from "styled-components";

export const TextArea = styled.textarea`
    padding: 5px 8px;
    border: 1px solid ${({ theme }) => theme.colors.darkPurple};
    box-sizing: border-box;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
    border-radius: 5px;
    width: 25rem;
    height: 18rem;
    resize: none;
    margin-bottom: 1rem;
    &:focus {
        outline: none;
        box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
    }
`;
