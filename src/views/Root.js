import React from "react";
import { ThemeProvider } from "styled-components";
import MainTemplate from "../components/templates/MainTemplate/MainTemplate";
import { Wrapper } from "./Root.styles";
import { GlobalStyles } from "../assets/styles/GlobalStyles";
import { theme } from "../assets/styles/theme";
import Dashboard from "./Dashboard";
import PostProvider from "../providers/PostProvider";

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Wrapper>
                <MainTemplate>
                    <PostProvider>
                        <Dashboard />
                    </PostProvider>
                </MainTemplate>
            </Wrapper>
        </ThemeProvider>
    );
};

export default Root;
