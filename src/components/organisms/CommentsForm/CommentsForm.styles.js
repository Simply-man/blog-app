import styled from "styled-components";
import { Input } from "../../atoms/Input/Input";
import { Label } from "../../atoms/Label/Label";

export const FormWrapper = styled.div``;

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
