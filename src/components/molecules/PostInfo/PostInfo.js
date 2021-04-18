import React, { useContext } from "react";
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
} from "./PostInfo.styles";
import { Button } from "../../atoms/Button/Button";
import { PostContext } from "../../../providers/PostProvider";

const PostInfo = ({ history, title, date, message }) => {
    const { handleEditShowFormClick } = useContext(PostContext);

    const handleEditClick = (valueHistory) => {
        handleEditShowFormClick(valueHistory.location.pathname);
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
                <Title secondary>Comment section</Title>
                <StyledLabel htmlFor="Add comment">Add comment</StyledLabel>
                <StyledInput name="Add comment" id="Add comment" />
                <StyledCommentSection>
                    <StyledComment>Comment</StyledComment>
                    <StyledButton>Reply</StyledButton>
                </StyledCommentSection>
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
