import React, { useContext } from "react";
import { DeleteButton } from "../../atoms/DeleteButton/DeleteButton";
import { Title } from "../../atoms/Title/Title";
import {
    Wrapper,
    StyledData,
    StyledLink,
    StyledWrapper,
} from "./PostItem.styles";
import PropTypes from "prop-types";
import { PostContext } from "../../../providers/PostProvider";

const PostItem = ({ title, date }) => {
    const { deletePost } = useContext(PostContext);
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    return (
        <Wrapper>
            <DeleteButton absolute onClick={() => deletePost(title)} />
            <Title secondary>{title}</Title>
            <StyledWrapper>
                <StyledData>{`${day}\\${month}\\${year}`}</StyledData>
                <StyledLink>More</StyledLink>
            </StyledWrapper>
        </Wrapper>
    );
};

PostItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
};

export default PostItem;
