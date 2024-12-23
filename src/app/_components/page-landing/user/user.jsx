import { useState } from "react";

import Image from "next/image";

import chevron from '@/assets/app-icons/chevron.png'
import collapsed from '@/assets/app-icons/collapsed.png'

import css from "./user.module.css";

export const UserTab = ({ activeTab }) => {

    const [display, setDisplay] = useState({ typeTab: true, contactTab: true });
    const [activeCheckboxes, setActiveCheckboxes] = useState({ projectManager: false, developer: false, architect: false });
    const [email, setEmail] = useState('pedr0.nogueira@hotmail.com');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('+351');

    if (activeTab !== "user") return null;

    const hideTabs = (tab) => {
        setDisplay({ ...display, [tab]: !display[tab] });
    };

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        setActiveCheckboxes({ ...activeCheckboxes, [name]: checked });
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handlePhone = (e) => {
        let value = e.target.value.replace(/\D/g, '');

        if (value.startsWith('351')) {
            value = '+351 ' + value.slice(3);
        } else {
            value = '+351 ' + value;
        }

        if (value.length > 14) {
            value = value.slice(0, 14);
        }

        value = value.replace(/(\d{3})(?=\d)/g, '$1 ');

        setPhone(value.trim());
    };

    const handleCancel = () => {
        setEmail('');
        setPassword('');
        setPhone('+351 ');
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSave = () => {
        if (email !== '' && password !== '') {
            if (!isValidEmail(email)) {
                alert('Reveja o seu email');
                return;
            }
            alert('Sucesso!')
        } else {
            alert('Reveja os dados inseridos')
            return;
        }
    };

    return (
        <section className={css.container}>
            <h1 className={css.title} >Utilizador</h1>
            <section>
                <div className={css.content}>
                    <div className={css.row}>
                        <h3 className={css.subtitle}>Dados Pessoais</h3>
                        <span className={css.chevron} onClick={() => hideTabs("typeTab")}>
                            {display.typeTab ?
                                <Image src={chevron} alt="chevron" priority width={20} height={20} className={css.icon} />
                                :
                                <Image src={collapsed} alt="collapsed" priority width={20} height={20} className={css.icon} />
                            }
                        </span>
                    </div>
                </div>
                {display.typeTab && <div className={css.tabContent} >
                    <div className={css.tabRow}>
                        <input
                            name="projectManager"
                            type="checkbox"
                            onChange={handleCheckbox}
                        />
                        <p className={activeCheckboxes.projectManager ? css.active : null}>Project Manager</p>
                    </div>
                    <div className={css.tabRow}>
                        <input
                            name="developer"
                            type="checkbox"
                            onChange={handleCheckbox}
                        />
                        <p className={activeCheckboxes.developer ? css.active : null}>Developer</p>
                    </div>
                    <div className={css.tabRow}>
                        <input
                            name="architect"
                            type="checkbox"
                            onChange={handleCheckbox}
                        />
                        <p className={activeCheckboxes.architect ? css.active : null}>Architect</p>
                    </div>
                </div>}
                <div className={css.content}>
                    <div className={css.row}>
                        <h3 className={css.subtitle}>Contacto</h3>
                        <span className={css.chevron} onClick={() => hideTabs("contactTab")}>
                            {display.contactTab ?
                                <Image src={chevron} alt="chevron" priority width={20} height={20} className={css.icon} />
                                :
                                <Image src={collapsed} alt="collapsed" priority width={20} height={20} className={css.icon} />
                            }
                        </span>
                    </div>
                </div>
                {display.contactTab && <div className={css.tabContent} >
                    <div className={css.grid}>
                        <div className={css.column}>
                            <p>Email</p>
                            <input
                                className={css.inputFields}
                                type="text"
                                value={email}
                                onChange={handleEmail}
                            />
                        </div>
                        <div className={css.column}>
                            <p>Palavra-passe</p>
                            <input
                                className={css.inputFields}
                                type="password"
                                value={password}
                                onChange={handlePassword}
                            />
                        </div>
                    </div>
                    <div className={css.grid}>
                        <div className={css.column}>
                            <p>Telefone</p>
                            <input
                                className={css.inputFields}
                                type="text"
                                value={phone}
                                onChange={handlePhone}
                            />
                        </div>
                    </div>
                </div>}
                <div className={css.buttonContainer}>
                    <button className={css.whiteButton} onClick={handleCancel}>Cancelar</button>
                    <button className={css.button} onClick={handleSave}>Guardar</button>
                </div>
            </section>
        </section>
    );
};