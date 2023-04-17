import Main from "../Main/Main";
import NavBar from "../NavBar/NavBar";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <NavBar />
            </header>
            <main>
                <Main />
            </main>
        </div>
    );
}

export default Layout;
