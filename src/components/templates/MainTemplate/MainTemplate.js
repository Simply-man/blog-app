import React from "react";
import { Wrapper } from "./MainTemplate.styles";
import { Title } from "../../atoms/Title/Title";

const MainTemplate = ({ children }) => {
    return (
        <Wrapper>
            <Title primary>Blog</Title>
            {children}
        </Wrapper>
    );
};

export default MainTemplate;
