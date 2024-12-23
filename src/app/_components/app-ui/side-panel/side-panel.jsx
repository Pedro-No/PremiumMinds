import Link from "next/link";

import css from "./side-panel.module.css";

export default function SidePannel({ activeTab, setActiveTab }) {

    const links = [
        { label: "Home", tabName: "home" },
        { label: "Utilizador", tabName: "user" },
        { label: "Contactos", tabName: "contact" },
        { label: "Serviços", tabName: "services" },
    ]

    return (
        <section className={css.container}>
            <div className={css.list}>
                {links.map((link, i) => (
                    <div
                        key={i}
                        className={activeTab === link.tabName ? css.active : css.inactive}
                        onClick={() => setActiveTab(link.tabName)}
                    >
                        {link.label}
                    </div>
                ))}
            </div>
            <footer className={css.footer}>
                <p> 2019® Premium-minds.com</p>
            </footer>
        </section >
    );
};