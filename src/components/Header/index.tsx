import { useRef } from "react";

import { Menu } from "primereact/menu";
import { Button } from "primereact/button";

import styles from "./styles.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
	const menu: any = useRef(null);

	const router = useRouter();
	
	const items = [
		{
			items: [
				{
					label: 'FINALIDADE ESPECÍFICA',
					command: () => {
						router.push("/finalidade_especifica")
					}
				},
				{
					label: 'PODCAST',
					command: () => {
						router.push("/podcast")
					}
				},
				{
					label: 'PROJETOS',
					command: () => {
						router.push("/projetos")
					}
				}
			]
		},
	];

	return (
		<div className={styles.container}>
			<div className={styles.subContainer}>
				<Link href="/" className={styles.leftHeader}>
					<img src="logo.png" />
					<h1>A.P.G.M.E</h1>
				</Link>
				
				<nav className={styles.headerNavigator}>
					<Link href="/estatuto">Estatuto</Link>
					<Link href="/ata_fundacao">Ata de Fundação</Link>
					<Link href="/finalidade_especifica">Finalidade Específica</Link>
					<Link href="/podcast">Podcast</Link>
					<Link href="/projetos">Projetos</Link>
					{/* <p onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup>Mais</p> */}
					<Menu model={items} popup ref={menu} id="popup_menu" />
				</nav>
			</div>
		</div>
	)
}

export { Header };
