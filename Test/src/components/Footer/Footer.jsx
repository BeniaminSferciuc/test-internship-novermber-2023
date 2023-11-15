import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <p>Created by: Beniamin Sferciuc</p>
                <p>Internship 2023</p>
            </div>
        </footer>
    );
};

export default Footer;
