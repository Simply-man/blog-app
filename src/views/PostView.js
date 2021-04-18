import React from "react";
import { CenterViewWrapper } from "../components/molecules/CenterViewWrapper/CenterViewWrapper";
import CurrentPost from "../components/organisms/CurrentPost/CurrentPost";

const PostView = () => {
    return (
        <CenterViewWrapper>
            <CurrentPost />
        </CenterViewWrapper>
    );
};

export default PostView;
