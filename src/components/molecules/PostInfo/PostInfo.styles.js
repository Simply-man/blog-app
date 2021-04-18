import styled from "styled-components";
import { Link } from "react-router-dom";
import { Input } from "../../atoms/Input/Input";
import { Label } from "../../atoms/Label/Label";

export const Wrapper = styled.div`
    position: absolute;
    top: 2rem;
    right: 2rem;
    display: flex;
    justify-content: space-between;
    width: 17%;
    height: fit-content;
`;

export const StyledMessage = styled.p`
    margin-top: 2rem;
    text-align: justify;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
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

export const StyledComments = styled.div`
    width: 100%;
    margin-top: 4rem;
`;

export const StyledLabel = styled(Label)`
    display: block;
    margin-top: 2rem;
    text-align: left;
`;

export const StyledInput = styled(Input)`
    margin: 0.5rem auto 2rem auto;
    width: 100%;
    border-top: 0;
    border-left: 0;
    border-right: 0;
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

export const FormWrapper = styled.div``;
