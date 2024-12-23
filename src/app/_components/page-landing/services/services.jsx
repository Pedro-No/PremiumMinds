import css from "./services.module.css";

export const ServicesTab = ({ activeTab }) => {

    if (activeTab !== "services") return null;

    return (
        <section className={css.container}>
            <h1 className={css.title}>Services</h1>
        </section>
    );
};