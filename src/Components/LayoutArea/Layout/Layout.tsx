import Main from "../Main/Main";
import NavBar from "../NavBar/NavBar";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
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
            <div className="contact-options">
                <a target="_blank" href="https://wa.me/972547698387" className="contact-options-icon-wrapper phone">
                    <WhatsAppIcon fontSize="large" sx={{ color: "green", cursor: "pointer"}} />
                </a>
                <a href="tel:0547698387" className="contact-options-icon-wrapper whatsapp">
                    <PhoneIcon fontSize="large" sx={{ color: "#C430A3", cursor: "pointer"}} />
                </a>
            </div>
        </div>
    );
}

export default Layout;
