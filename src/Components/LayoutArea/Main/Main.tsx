import About from "../../Sections/About/About";
import ContactUs from "../../Sections/ContactUs/ContactUs";
import Services from "../../Sections/Services/Services";
import TopBanner from "../../Sections/TopBanner/TopBanner";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
            <div id="topBanner">
                <TopBanner />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="contactUs">
                <ContactUs />
            </div>
        </div>
    );
}

export default Main;
