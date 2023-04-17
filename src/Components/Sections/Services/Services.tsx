import "./Services.css";
import moving from "../../../assets/images/services/moving.jpg"
import officeMoving from "../../../assets/images/services/office-moving.jpg"
import assembly from "../../../assets/images/services/assembly.jpg"
import commercialMoving from "../../../assets/images/services/commercial-moving.jpg"
import installation from "../../../assets/images/services/installation.jpg"
import general from "../../../assets/images/services/pexels-kate-trifo-4057059.jpg"
import handyman from "../../../assets/images/services/handiman.jpg"
import carpenter from "../../../assets/images/services/carpenter.jpg"
import generalFix from "../../../assets/images/services/general-fix.jpg"
import 'animate.css';
import { useEffect, useRef, useState } from "react";

function Services(): JSX.Element {

    const element = useRef<HTMLDivElement>(null)
    const [inViewPort, setInViewPort] = useState<Boolean>(false)

    interface Service {
        title: string;
        img: string;
        description: string;
    }

    useEffect(() => {
        function isInViewport() {
            let el = element.current
            const rect = el?.getBoundingClientRect();
            if (!rect) return false
            return rect ? (
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
            ) : false;
        }

        document.addEventListener("scroll", isInViewport)
    }, [])


    const serviceArr: Service[] = [
        {
            title: "הובלת דירות",
            img: moving,
            description: ""
        },
        {
            title: "הובלת משרדים",
            img: officeMoving,
            description: ""
        },
        {
            title: "פירוק והרכבה",
            img: assembly,
            description: ""
        },
        {
            title: "אספקה מסחרית",
            img: commercialMoving,
            description: ""
        },
        {
            title: "התקנת מוצרי חשמל",
            img: installation,
            description: ""
        },
        {
            title: "התקנת טלויזיות",
            img: general,
            description: ""
        },
        {
            title: "הנדימן",
            img: handyman,
            description: ""
        },
        {
            title: "שירותי נגרות",
            img: carpenter,
            description: ""
        },
        {
            title: "תיקונים כלליים",
            img: generalFix,
            description: ""
        },
    ]

    return (
        <div ref={element} className="Services page ltr-grid">
            <div className="Services-Content div-parent">
                <div className="Services-Content-cards div-child">
                    {serviceArr.map((el, i) => {
                        return <div key={i}>
                            <div className={"service-card animate__animated"+inViewPort?"animate__fadeIn":""} >
                                <div className="service-card-bg" style={{ backgroundImage: `url(${el.img})` }}>
                                </div>
                                <span>{el.title}</span>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className= "div-parent animate__animated animate__fadeInRight">
                <div className="caption div-child">
                    <span>Our</span>
                    <br />
                    <span>Services</span>
                </div>
            </div>
        </div>
    );
}

export default Services;
