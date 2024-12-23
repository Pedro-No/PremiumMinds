import css from "./contacts.module.css";

export const ContactsTab = ({ activeTab }) => {

    if (activeTab !== "contact") return null;

    return (
        <section className={css.container}>
            <h1 className={css.title}>Contacts</h1>
        </section>
    );
};