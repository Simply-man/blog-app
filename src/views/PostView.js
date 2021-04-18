import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CenterViewWrapper } from "../components/molecules/CenterViewWrapper/CenterViewWrapper";
import CurrentPost from "../components/organisms/CurrentPost/CurrentPost";
import { PostContext } from "../providers/PostProvider";
import AddPost from "./AddPost";

const PostView = () => {
    const { showEditForm } = useContext(PostContext);
    const history = useHistory();

    return (
        <CenterViewWrapper>
            {showEditForm && <AddPost history={history} />}
            <CurrentPost history={history} />
        </CenterViewWrapper>
    );
};

export default PostView;
