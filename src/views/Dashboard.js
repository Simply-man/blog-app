import React, { useContext } from "react";
import PostsList from "../components/organisms/PostsList/PostsList";
import { Button } from "../components/atoms/Button/Button";
import styled from "styled-components";
import { PostContext } from "../providers/PostProvider";
import AddPost from "./AddPost";
import { useHistory } from "react-router-dom";

export const Wrapper = styled.div`
    width: 80%;
    position: relative;
`;

const Dashboard = () => {
    const { posts, handleShowFormClick, showForm } = useContext(PostContext);
    const history = useHistory();

    return (
        <>
            <Wrapper>
                <Button add addMarginTop onClick={handleShowFormClick}>
                    Add
                </Button>
                <PostsList posts={posts} history={history} />
            </Wrapper>
            {showForm && <AddPost />}
        </>
    );
};

export default Dashboard;
