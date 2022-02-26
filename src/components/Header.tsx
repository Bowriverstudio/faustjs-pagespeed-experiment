/* eslint-disable react/jsx-key */
import React from "react";
import styles from "scss/components/Header.module.scss";
import Link from "next/link";
import { client, MenuLocationEnum } from "client";

interface Props {
  title?: string;
  description?: string;
}

function Header({
  title = "Headless by WP Engine",
  description,
}: Props): JSX.Element {
  const { menuItems } = client.useQuery();
  const links = menuItems({
    where: { location: MenuLocationEnum.PRIMARY },
  }).nodes;

  return (
    <header>
      <div className={styles.wrap}>
        <div className={styles["title-wrap"]}>
          <p className={styles["site-title"]}>
            <Link href="/" prefetch={false}>
              <a>{title}</a>
            </Link>
          </p>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        <div className={styles.menu}>
          <ul>
            {links?.map((link) => {
              const { label, url } = link;
              return (
                <li key={`${label}$-menu`}>
                  <Link href={url ?? ""} prefetch={false}>
                    <a href={url}>{label}</a>
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="https://github.com/wpengine/faustjs" prefetch={false}>
                <a
                  className="button"
                  href="https://github.com/wpengine/faustjs"
                >
                  GitHub
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
