import React, { useContext } from "react";
import { Title } from "../../atoms/Title/Title";
import { StyledData } from "../../atoms/Date/Date";
import { StyledMessage } from "./PostInfo.styles";
import PropTypes from "prop-types";
import { Wrapper, StyledLink } from "./PostInfo.styles";
import { Button } from "../../atoms/Button/Button";
import { PostContext } from "../../../providers/PostProvider";
import CommentsSection from "../CommentsSection/CommentsSection";

const PostInfo = ({ history, id, title, date, message, comments }) => {
    const { handleEditShowFormClick, handleCommentSubmit } = useContext(
        PostContext
    );

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
            <CommentsSection
                id={id}
                handleCommentSubmit={handleCommentSubmit}
                comments={comments}
            />
        </>
    );
};

PostInfo.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.objectOf(Date).isRequired,
    message: PropTypes.string.isRequired,
    comments: PropTypes.array,
};

export default PostInfo;
