import React, { useState } from "react";
import { Posts as postData } from "../data/posts";

export const PostContext = React.createContext({
    posts: [],
    showForm: false,
    showEditForm: false,
    formOptions: {},
    fillForm: {},
    postView: [],
    handleShowFormClick: () => {},
    handleEditShowFormClick: () => {},
    handleCloseForm: () => {},
    handleAddSubmit: () => {},
    handleEditSubmit: () => {},
    deletePost: () => {},
    handleRouteHisotry: () => {},
    handleCommentSubmit: () => {},
});

const addFormOptions = {
    title: "Add new post",
    buttonText: "Add post",
};

const editFormOptions = {
    title: "Edit current post",
    buttonText: "Edit post",
};

const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState(postData || []);
    const [postView, setPostView] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [formOptions, setFormOptions] = useState(addFormOptions);
    const [fillForm, setFillForm] = useState({});

    const handleRouteHisotry = (value) => {
        const filteredPostView = posts.filter((post) => post.id === value);
        setPostView(filteredPostView);
    };

    const handleAddSubmit = (values) => {
        setShowForm(false);
        console.log(posts.length + 1);
        const newPost = {
            id: posts.length + 1,
            title: values.title,
            date: values.date,
            message: values.message,
            comments: [],
        };
        setPosts([newPost, ...posts]);
    };

    const handleEditSubmit = (values) => {
        setShowEditForm(false);
        const index = posts.findIndex((post) => post.id === values.id);
        posts[index].id = values.id;
        posts[index].title = values.title;
        posts[index].date = values.date;
        posts[index].message = values.message;
    };

    const handleCommentSubmit = (formValue, currentPostId) => {
        console.log(currentPostId);
        const index = posts.findIndex((post) => post.id === currentPostId);
        console.log(`Index: ${index}, \n ${posts[index].id}`);
        const newComment = {
            id: posts[index].comments.length + 1,
            content: formValue,
        };
        posts[index].comments.push(newComment);
    };

    const handleShowFormClick = () => {
        setFormOptions(addFormOptions);
        setFillForm({});
        setShowForm(true);
    };

    const handleEditShowFormClick = (valueHistory) => {
        const postIdFromRoute = Number(valueHistory.slice(6));

        const currentPost = posts.filter((post) => post.id === postIdFromRoute);
        setFillForm(currentPost[0]);
        setFormOptions(editFormOptions);
        setShowEditForm(true);
    };

    const handleCloseForm = (value) => {
        setShowForm(value);
        setShowEditForm(value);
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
                formOptions,
                showEditForm,
                fillForm,
                postView,
                handleShowFormClick,
                handleEditShowFormClick,
                handleCommentSubmit,
                handleCloseForm,
                handleAddSubmit,
                handleEditSubmit,
                deletePost,
                handleRouteHisotry,
            }}>
            {children}
        </PostContext.Provider>
    );
};

export default PostProvider;
