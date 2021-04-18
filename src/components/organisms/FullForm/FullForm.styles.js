import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 25px;
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    max-width: 500px;
    padding: 40px 50px;
    border-radius: 5px;
    box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);

    button:last-child {
        margin-left: 1rem;
    }
`;
