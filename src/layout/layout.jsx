import Header from "./header.jsx";
export default function Layout({children}){
    return <div className="app-layout">
        <Header />
            <div>{children}</div>
    </div>
}
