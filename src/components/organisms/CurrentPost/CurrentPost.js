import React, { useContext } from "react";
import { PostContext } from "../../../providers/PostProvider";
import PostInfo from "../../molecules/PostInfo/PostInfo";
import { Wrapper } from "./CurrentPost.styles";

const CurrentPost = (props) => {
    const { postView } = useContext(PostContext);
    return (
        <Wrapper>
            {postView.map(({ title, date, message }) => (
                <PostInfo
                    key={title}
                    title={title}
                    date={date}
                    message={message}
                    {...props}
                />
            ))}
        </Wrapper>
    );
};

export default CurrentPost;
