import React, { useState } from "react";
import { Title } from "../../atoms/Title/Title";
import { StyledInput, StyledLabel, FormWrapper } from "./CommentsForm.styles";

const CommentsForm = ({ id, handleCommentSubmit }) => {
    const [formValue, setFormValue] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleCommentSubmit(formValue, id);
        setFormValue("");
    };

    const handleInputChange = (e) => {
        setFormValue(e.target.value);
    };

    return (
        <FormWrapper as="form" method="POST" onSubmit={handleFormSubmit}>
            <Title secondary>Comment section</Title>
            <StyledLabel htmlFor="Add comment">Add comment</StyledLabel>
            <StyledInput
                name="Add comment"
                id="Add comment"
                value={formValue}
                onChange={handleInputChange}
            />
        </FormWrapper>
    );
};

export default CommentsForm;
