import React, { useContext, useState } from "react";
import { Title } from "../../atoms/Title/Title";
import { StyledData } from "../../atoms/Date/Date";
import { StyledMessage } from "./PostInfo.styles";

import PropTypes from "prop-types";
import {
    Wrapper,
    StyledLink,
    StyledComments,
    StyledInput,
    StyledCommentSection,
    StyledComment,
    StyledButton,
    StyledLabel,
    FormWrapper,
} from "./PostInfo.styles";
import { Button } from "../../atoms/Button/Button";
import { PostContext } from "../../../providers/PostProvider";

const PostInfo = ({ history, id, title, date, message, comments }) => {
    const { handleEditShowFormClick, handleCommentSubmit } = useContext(
        PostContext
    );
    const [formValue, setFormValue] = useState("");

    const handleEditClick = (valueHistory) => {
        handleEditShowFormClick(valueHistory.location.pathname);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleCommentSubmit(formValue, id);
        setFormValue("");
    };

    const handleInputChange = (e) => {
        setFormValue(e.target.value);
    };

    return (
        <>
            <Wrapper>
                <Button edit onClick={() => handleEditClick(history)}>
                    Edit
                </Button>
                <StyledLink to="/">Back</StyledLink>
            </Wrapper>
            <Title setMarginAuto fontXl>
                {title}
            </Title>
            <StyledData>{`${date.getDate()}\\${date.getMonth()}\\${date.getFullYear()}`}</StyledData>
            <StyledMessage>{message}</StyledMessage>
            <StyledComments>
                <FormWrapper
                    as="form"
                    method="POST"
                    onSubmit={handleFormSubmit}>
                    <Title secondary>Comment section</Title>
                    <StyledLabel htmlFor="Add comment">Add comment</StyledLabel>
                    <StyledInput
                        name="Add comment"
                        id="Add comment"
                        value={formValue}
                        onChange={handleInputChange}
                    />
                </FormWrapper>
                {comments.map((comment) => (
                    <StyledCommentSection key={comment.id}>
                        <StyledComment>{comment.content}</StyledComment>
                        <StyledButton>Reply</StyledButton>
                    </StyledCommentSection>
                ))}
            </StyledComments>
        </>
    );
};

PostInfo.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.objectOf(Date).isRequired,
    message: PropTypes.string.isRequired,
};

export default PostInfo;
