import Image from "next/image";

import css from "./home.module.css";

export const HomeTab = ({ activeTab }) => {

    if (activeTab !== "home") return null;

    const devTime = '5 horas e 30 mins';
    const profilePic = 'https://avatars.githubusercontent.com/u/127292883?v=4'

    return (
        <section className={css.container}>
            <div className={css.column}>
                <div className={css.profilePic}>
                    <Image src={profilePic} alt="Pedro Nogueira" priority width={200} height={200} />
                </div>
                <h3 className={css.title}>Pedro Nogueira</h3>
                <div className={css.list}>
                    <a href="https://github.com/Pedro-No" target="_blank">▸ My github</a>
                    <a href="https://www.linkedin.com/in/pedroinogueira/" target="_blank">▸ My linkedin</a>
                </div>
            </div>
            <div className={css.text}>
                <h1 className={css.title}>Bem vindo!</h1>
                <p>
                    O meu nome é Pedro Nogueira e esta é a minha submissão
                    para a vaga de Web Developer.
                </p>
                <p>
                    Este projeto demorou {devTime} a completar.
                    Foi feito com Next.js, React, Javascript e CSS.
                </p>
                <p>
                    Obrigado pela oportunidade!
                </p>
            </div>
        </section>
    );
}