import React from "react";
import styled from "styled-components";
import { Input } from "../../atoms/Input/Input";
import { Label } from "../../atoms/Label/Label";
import PropTypes from "prop-types";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1.75rem 0;
`;

const FormField = ({ id, label, name, type = "text", value, onChange }) => {
    return (
        <Wrapper>
            <Label htmlFor={id}>{label}</Label>
            <Input
                name={name}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
            />
        </Wrapper>
    );
};

FormField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};
export default FormField;
