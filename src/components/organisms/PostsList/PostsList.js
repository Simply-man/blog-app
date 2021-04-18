import React from "react";
import styled from "styled-components";
import PostItem from "../../molecules/PostItem/PostItem";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 2rem;
`;

const PostsList = ({ posts, history }) => {
    return (
        <Wrapper>
            {posts.map(({ id, title, date }) => (
                <PostItem
                    key={title}
                    id={id}
                    title={title}
                    date={date}
                    history={history}
                />
            ))}
        </Wrapper>
    );
};

export default PostsList;
