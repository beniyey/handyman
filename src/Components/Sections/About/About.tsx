import "./About.css";

function About(): JSX.Element {
    function goToContactPage(){
        document?.getElementById("contactUs")?.scrollIntoView()
    }
    return (
        <div className="About page">
            <div className="caption div-parent">
                <div className="div-child">
                    <span>ABOUT</span>
                    <br />
                    <span>US</span>
                </div>
            </div>
			<div className="AboutPage-content div-parent">
                <div className="div-child">
                    <h2> קצת עלינו </h2>
                    <p>
                        הנדימן  הינו שירות הובלות בפריסה ארצית המתמחה במתן שירותי הנדימן מגוונים והובלות.
                        הצוות המנוסה והמקצועי שלנו הוא בדיוק מה שתצטרכו, בין אם הובלה, או תיקון קטן בבית.
                    </p>
                    <ul>
                        <li>הובלות</li>
                        <li>חשמל וגופי תאורה</li>
                        <li>הרכבת פרקט</li>
                        <li>פרגולות</li>
                        <li>עבודות עץ</li>
                        <li>פירוק והאכבת רהיטים</li>
                    </ul>
                    <p>
                        אנחנו מתחייבים לספק שירות מהיר, אמין ובמחירים נוחים לכל לקוחותינו.
                        אם אתה צריך הובלה או תיקון, הנדימן אקספרס כאן כדי לשירותכם.
                        צרו קשר עוד היום כדי לתאם את השירות המבוקש במהירות וביעילות.
                    </p>
                    <button className="AboutPage-action-button" onClick={goToContactPage}>לקבלת הצעת מחיר</button>
                </div>
            </div>
        </div>
    );
}

export default About;
