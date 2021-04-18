import React, { useContext } from "react";
import { DeleteButton } from "../../atoms/DeleteButton/DeleteButton";
import { Title } from "../../atoms/Title/Title";
import { Wrapper, StyledLink, StyledWrapper } from "./PostItem.styles";
import { StyledData } from "../../atoms/Date/Date";
import PropTypes from "prop-types";
import { PostContext } from "../../../providers/PostProvider";

const PostItem = ({ id, title, date, history }) => {
    const { deletePost, handleRouteHisotry } = useContext(PostContext);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const handleRouteClick = () => {
        history.push(`/post/${id}`);
        handleRouteHisotry(id);
    };

    return (
        <Wrapper>
            <DeleteButton absolute onClick={() => deletePost(title)} />
            <Title secondary>{title}</Title>
            <StyledWrapper>
                <StyledData>{`${day}\\${month}\\${year}`}</StyledData>
                <StyledLink onClick={handleRouteClick}>More</StyledLink>
            </StyledWrapper>
        </Wrapper>
    );
};

PostItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
};

export default PostItem;
