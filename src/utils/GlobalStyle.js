import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    min-height: 100%;
  }
  ul,li,dl,dd,dt{
      padding: 0;
      margin: 0;
      list-style: none;
  }
    a{
        text-decoration: none;
    }
    *{
        padding: 0;
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,
        "Segoe UI",Roboto,"Helvetica Neue",
        Arial,sans-serif,"Apple Color Emoji",
        "Segoe UI Emoji","Segoe UI Symbol" ;
        &::-webkit-scrollbar {
            display: none;
            width: 0;
        }
    }
  .app-header {
      width: 90%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
  }

  .app-header .connect {
      width: 250px;
      text-align: right
  }

  .app-header .connect-button {
      height: 48px;
      padding: 6px 40px;
      border-radius: 12px;
      border: 2px solid #fff;
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal
  }
`;



export default GlobalStyle;
