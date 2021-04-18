import React, { useContext } from "react";
import PostsList from "../components/organisms/PostsList/PostsList";
import { Button } from "../components/atoms/Button/Button";
import styled from "styled-components";
import { PostContext } from "../providers/PostProvider";
import AddPost from "./AddPost";

export const Wrapper = styled.div`
    width: 80%;
    position: relative;
`;

const Dashboard = () => {
    const { posts, handleShowFormClick, showForm } = useContext(PostContext);

    return (
        <>
            <Wrapper>
                <Button add addMarginTop onClick={handleShowFormClick}>
                    Add
                </Button>
                <PostsList posts={posts} />
            </Wrapper>
            {showForm && <AddPost />}
        </>
    );
};

export default Dashboard;
