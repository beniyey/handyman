import "./TopBanner.css";

function TopBanner(): JSX.Element {

    function goToContactPage(){
        document?.getElementById("contactUs")?.scrollIntoView()
    }

    return (
        <div className="TopBanner">
			   <div>
                <div className="MainPage-top-banner-header">
                    <span className="MainBanner">MOVING</span>
                    <br />
                    <span>TIME</span>
                </div>
                <div className="MainPage-top-banner-content">
                    <p>
                        הנדימן  הינו שירות הובלות בפריסה ארצית המתמחה במתן שירותי הנדימן מגוונים ללקוחות.
                        הצוות המנוסה והמקצועי שלנו הוא בדיוק מה שתצטרכו, בין אם הובלה, או תיקון קטן בבית.
                        <br />
                        <span style={{ "color": "#C430A3" }}>
                            אם אתה צריך הובלה או תיקון, הנדימן אקספרס כאן כדי לשירותכם.
                        </span>
                        <br />
                        צרו קשר עוד היום כדי לתאם את השירות המבוקש במהירות וביעילות.
                    </p>
                </div>
                <button className="MainPage-action-button" onClick={goToContactPage}>לקבלת הצעת מחיר</button>
            </div>
        </div>
    );
}

export default TopBanner;
