import React, { useContext, useEffect, useState } from "react";
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

const FullForm = ({ history }) => {
    const {
        handleCloseForm,
        handleAddSubmit,
        handleEditSubmit,
        formOptions,
        fillForm,
    } = useContext(PostContext);
    const [formValues, setFormValues] = useState(initialValues);

    useEffect(() => {
        if (Object.keys(fillForm).length === 0) return;
        setFormValues(fillForm);
    }, [fillForm]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (formValues.title === "" || formValues.message === "") return;
        if (history.location.pathname === "/") {
            handleAddSubmit(formValues);
        } else {
            handleEditSubmit(formValues);
        }
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
        setFormValues(initialValues);
        handleCloseForm(false);
    };

    return (
        <Wrapper as="form" method="POST" onSubmit={handleFormSubmit}>
            <Title setMarginAuto tertiary normalStyle>
                {formOptions.title}
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
            <Button type="submit">{formOptions.buttonText}</Button>
            <Button cancel onClick={handleCloseFormClick}>
                Cancel
            </Button>
        </Wrapper>
    );
};

export default FullForm;
