import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MainTemplate from "../components/templates/MainTemplate/MainTemplate";
import { Wrapper } from "./Root.styles";
import { GlobalStyles } from "../assets/styles/GlobalStyles";
import { theme } from "../assets/styles/theme";
import Dashboard from "./Dashboard";
import PostProvider from "../providers/PostProvider";
import PostView from "./PostView";

const Root = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Wrapper>
                    <MainTemplate>
                        <PostProvider>
                            <Switch>
                                <Route path="/post/:id">
                                    <PostView />
                                </Route>
                                <Route path="/" exact>
                                    <Dashboard />
                                </Route>
                            </Switch>
                        </PostProvider>
                    </MainTemplate>
                </Wrapper>
            </ThemeProvider>
        </Router>
    );
};

export default Root;
