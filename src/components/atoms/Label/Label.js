import styled from "styled-components";

export const Label = styled.label`
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    margin-bottom: 0.35rem;
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.darkGrey};
`;
