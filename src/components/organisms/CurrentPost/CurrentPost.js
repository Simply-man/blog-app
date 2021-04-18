import React, { useContext } from "react";
import { PostContext } from "../../../providers/PostProvider";
import PostInfo from "../../molecules/PostInfo/PostInfo";
import { Wrapper } from "./CurrentPost.styles";

const CurrentPost = (props) => {
    const { postView } = useContext(PostContext);
    return (
        <Wrapper>
            {postView.map(({ id, title, date, message, comments }) => (
                <PostInfo
                    id={id}
                    key={title}
                    title={title}
                    date={date}
                    comments={comments}
                    message={message}
                    {...props}
                />
            ))}
        </Wrapper>
    );
};

export default CurrentPost;
