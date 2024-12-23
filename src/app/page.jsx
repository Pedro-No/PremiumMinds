'use client';

import { useState } from "react";
import SidePannel from "./_components/app-ui/side-panel/side-panel";

import { HomeTab } from "./_components/page-landing/home/home";
import { UserTab } from "./_components/page-landing/user/user";
import { ServicesTab } from "./_components/page-landing/services/services";
import { ContactsTab } from "./_components/page-landing/contacts/contacts";


import styles from "./page.module.css";

export default function Home() {

  const [activeTab, setActiveTab] = useState("home");

  return (
    <section className={styles.container}>
      <SidePannel activeTab={activeTab} setActiveTab={setActiveTab} />
      <HomeTab activeTab={activeTab} />
      <UserTab activeTab={activeTab} />
      <ServicesTab activeTab={activeTab} />
      <ContactsTab activeTab={activeTab} />
    </section>
  );
}
