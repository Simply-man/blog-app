import React, { useContext } from "react";
import { PostContext } from "../../../providers/PostProvider";
import PostInfo from "../../molecules/PostInfo/PostInfo";
import { Wrapper } from "./CurrentPost.styles";

const CurrentPost = () => {
    const { postView } = useContext(PostContext);
    return (
        <Wrapper>
            {postView.map(({ title, date, message }) => (
                <PostInfo
                    key={title}
                    title={title}
                    date={date}
                    message={message}
                />
            ))}
        </Wrapper>
    );
};

export default CurrentPost;
