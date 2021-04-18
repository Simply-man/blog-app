import React from "react";
import styled from "styled-components";
import FullForm from "../components/organisms/FullForm/FullForm";
export const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(1, 1, 1, 0.7);
    z-index: 1;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AddPost = (props) => {
    return (
        <Wrapper>
            <FullForm {...props} />
        </Wrapper>
    );
};

export default AddPost;
