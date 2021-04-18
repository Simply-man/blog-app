import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Label } from "../../atoms/Label/Label";
import { TextArea } from "../../atoms/TextArea/TextArea";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem 0;
    ${Label} {
        margin: 0.5rem 0;
    }
`;

const TextAreaField = ({ id, label, name, onChange, value }) => {
    return (
        <Wrapper>
            <Label htmlFor={id}>{label}</Label>
            <TextArea name={name} id={id} value={value} onChange={onChange} />
        </Wrapper>
    );
};

TextAreaField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default TextAreaField;
