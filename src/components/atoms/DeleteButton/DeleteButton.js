import React from "react";
import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete-icon.svg";

export const StyledButton = styled.button`
    width: ${({ theme }) => theme.buttonSize.sm};
    height: ${({ theme }) => theme.buttonSize.sm};
    position: ${({ absolute }) => (absolute ? "absolute" : "block")};
    top: 2px;
    right: 3px;
    background-color: ${({ theme }) => theme.colors.error};
    border-radius: 50px;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 0;
    cursor: pointer;

    svg {
        width: 100%;
        height: 100%;
    }
`;

export const DeleteButton = (props) => {
    return (
        <StyledButton {...props}>
            <DeleteIcon />
        </StyledButton>
    );
};
