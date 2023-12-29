import {BrowserRouter as Router} from "react-router-dom";
import RouterLink from "./router/router";
import GlobalStyle from "./utils/GlobalStyle";

function App() {

  return (
    <>
        <Router>
            <RouterLink />
        </Router>
        <GlobalStyle />

    </>
  )
}

export default App
