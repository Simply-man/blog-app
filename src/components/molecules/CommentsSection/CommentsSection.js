import React from "react";
import CommentsForm from "../../organisms/CommentsForm/CommentsForm";
import {
    StyledComments,
    StyledCommentSection,
    StyledComment,
    StyledButton,
} from "./CommentsSection.styles";

const CommentsSection = ({ id, handleCommentSubmit, comments }) => {
    return (
        <StyledComments>
            <CommentsForm id={id} handleCommentSubmit={handleCommentSubmit} />
            {comments.map((comment) => (
                <StyledCommentSection key={comment.id}>
                    <StyledComment>{comment.content}</StyledComment>
                    <StyledButton>Reply</StyledButton>
                </StyledCommentSection>
            ))}
        </StyledComments>
    );
};

export default CommentsSection;
