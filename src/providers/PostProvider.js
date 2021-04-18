import React, { useState } from "react";
import { Posts as postData } from "../data/posts";

export const PostContext = React.createContext({
    posts: [],
    showForm: false,
    postView: [],
    handleShowFormClick: () => {},
    handleCloseForm: () => {},
    handleAddSubmit: () => {},
    deletePost: () => {},
    handleRouteHisotry: () => {},
});

const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState(postData);
    const [postView, setPostView] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleRouteHisotry = (value) => {
        const filteredPostView = posts.filter((post) => post.id === value);
        setPostView(filteredPostView);
    };

    const handleAddSubmit = (values) => {
        setShowForm(false);
        const newPost = {
            id: posts.length + 1,
            title: values.title,
            date: values.date,
            message: values.message,
        };
        setPosts([newPost, ...posts]);
    };

    const handleShowFormClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = (value) => {
        setShowForm(value);
    };

    const deletePost = (title) => {
        const filteredPosts = posts.filter((post) => post.title !== title);
        setPosts(filteredPosts);
    };

    return (
        <PostContext.Provider
            value={{
                posts,
                showForm,
                postView,
                handleShowFormClick,
                handleCloseForm,
                handleAddSubmit,
                deletePost,
                handleRouteHisotry,
            }}>
            {children}
        </PostContext.Provider>
    );
};

export default PostProvider;
