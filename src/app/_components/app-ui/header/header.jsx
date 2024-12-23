'use client';

import { useTheme } from 'next-themes';
import Image from "next/image";

import MoonIcon from "../../../../assets/app-icons/moon_icon.png";
import SunIcon from "../../../../assets/app-icons/sun_icon.png";

import Link from "next/link";

import Logo from "../../../../assets/app-logos/logo_wdr.svg";

import css from "./header.module.css";

export default function Header() {
    const { theme, setTheme } = useTheme();

    return (
        <header className={css.container}>
            <Link href="/">
                <Image src={Logo} alt="logo" width={200} priority className={css.icon} />
            </Link>
            <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className={css.themeSwitch}
            >
                <Image
                    src={theme === 'light' ? SunIcon : MoonIcon}
                    alt={theme === 'light' ? "Sun Icon" : "Moon Icon"}
                    width={20}
                    height={20}
                    className={css.icon}
                />
            </button>
        </header>
    );
}