import React from "react";
import styled from "styled-components";
import PostItem from "../../molecules/PostItem/PostItem";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 2rem;
`;

const PostsList = ({ posts }) => {
    return (
        <Wrapper>
            {posts.map(({ title, date }) => (
                <PostItem key={title} title={title} date={date} />
            ))}
        </Wrapper>
    );
};

export default PostsList;
