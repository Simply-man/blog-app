import React, { useContext, useState } from "react";
import { Wrapper } from "./FullForm.styles";
import { Button } from "../../atoms/Button/Button";
import { Title } from "../../atoms/Title/Title";
import FormField from "../../molecules/FormField/FormField";
import TextAreaField from "../../molecules/TextAreaField/TextAreaField";
import { PostContext } from "../../../providers/PostProvider";

const initialValues = {
    title: "",
    date: new Date(),
    message: "",
};

const FullForm = () => {
    const [formValues, setFormValues] = useState(initialValues);
    const { handleCloseForm, handleAddSubmit } = useContext(PostContext);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (formValues.title === "" || formValues.message === "") return;
        handleAddSubmit(formValues);
        setFormValues(initialValues);
    };

    const handleFieldChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleCloseFormClick = (e) => {
        e.preventDefault();
        handleCloseForm(false);
    };
    return (
        <Wrapper as="form" method="POST" onSubmit={handleFormSubmit}>
            <Title setMarginAuto tertiary normalStyle>
                Add new post
            </Title>
            <FormField
                id="Title"
                name="title"
                label="Title"
                value={formValues.title}
                onChange={handleFieldChange}
            />
            <TextAreaField
                id="Message"
                name="message"
                label="Message"
                value={formValues.message}
                onChange={handleFieldChange}
            />
            <Button type="submit">Add post</Button>
            <Button cancel onClick={handleCloseFormClick}>
                Cancel
            </Button>
        </Wrapper>
    );
};

export default FullForm;
