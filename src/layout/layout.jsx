import Header from "./header.jsx";
export default function Layout({children}){
    return <div className="app-layout">
        <Header />
            <div className="app-container">{children}</div>
    </div>
}
