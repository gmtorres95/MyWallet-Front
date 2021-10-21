import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main/Main";
import NewEntry from "./pages/NewEntry";

import UserContext from "./contexts/UserContext";
import { getFromLocalStorage } from "./utils/localStorageUtils";

import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
    const [user, setUser] = useState(() => getFromLocalStorage());

    return (
        <Router>
            <UserContext.Provider value={{user, setUser}}>
                <GlobalReset />
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/sign-up" component={SignUp} />
                    <Route exact path="/main" component={Main} />
                    <Route exact path="/new-entry/:type" component={NewEntry} />
                </Switch>
            </UserContext.Provider>
        </Router>
    );
}

const GlobalReset = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym,
    address, big, button, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt,
    var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead,
    tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav,
    output, ruby, section, summary, time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        background-color: transparent;
    }
    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        background-color: #8C11BE;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after, q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;