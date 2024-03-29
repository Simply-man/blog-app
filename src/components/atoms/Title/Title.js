import styled from "styled-components";

export const Title = styled.h1`
    font-size: ${({ theme, primary, secondary, tertiary, fontXl }) =>
        primary
            ? theme.fontSize.xl3
            : fontXl
            ? theme.fontSize.xl
            : secondary
            ? theme.fontSize.md
            : tertiary
            ? theme.fontSize.lg
            : theme.fontSize.sm};
    font-weight: bold;
    font-style: ${({ normalStyle }) => (normalStyle ? "normal" : "italic")};
    width: fit-content;
    color: ${({ theme }) => theme.colors.black};
    margin: ${({ setMarginAuto }) => (setMarginAuto ? "auto" : "0")};
`;
