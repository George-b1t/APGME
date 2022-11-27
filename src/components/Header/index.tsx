import { useRef } from "react";

import { Menu } from "primereact/menu";
import { Button } from "primereact/button";

import styles from "./styles.module.scss";

function Header() {
	const menu: any = useRef(null);
	
	const items = [
		{
			items: [
				{
					label: 'Finalidade Específica',
					command: () => {
					}
				},
				{
					label: 'Podcast',
					command: () => {
					}
				},
				{
					label: 'Projetos',
					command: () => {
					}
				}
			]
		},
	];

	return (
		<div className={styles.container}>
			<div className={styles.leftHeader}>
				<img src="logo.png" />
				<h1>A.P.G.M.E</h1>
			</div>
			
			<nav className={styles.headerNavigator}>
				<p>Estatuto</p>
				<p>Ata de Fundação</p>
				<p onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup>Mais</p>
				<Menu model={items} popup ref={menu} id="popup_menu" />
			</nav>
		</div>
	)
}

export { Header };
