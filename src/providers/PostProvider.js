import React, { useState } from "react";
import { Posts as postData } from "../data/posts";

export const PostContext = React.createContext({
    posts: [],
    showForm: false,
    handleShowFormClick: () => {},
    handleCloseForm: () => {},
    handleAddSubmit: () => {},
    deletePost: () => {},
});

const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState(postData);
    const [showForm, setShowForm] = useState(false);

    const handleAddSubmit = (values) => {
        setShowForm(false);
        const newPost = {
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
                handleShowFormClick,
                handleCloseForm,
                handleAddSubmit,
                deletePost,
            }}>
            {children}
        </PostContext.Provider>
    );
};

export default PostProvider;
