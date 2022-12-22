import { useRef } from "react";

import { Menu } from "primereact/menu";
import { Button } from "primereact/button";

import styles from "./styles.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import projetosList from "../../services/projetos";

function Header() {
	const menu: any = useRef(null);
	const menu2: any = useRef(null);
	const menu3: any = useRef(null);
	const menu4: any = useRef(null);

	const router = useRouter();
	
	const instituicao = [
		{
			items: [
				{
					label: 'ATA',
					command: () => {
						router.push("/ata")
					}
				},
				{
					label: 'ESTATUTO',
					command: () => {
						router.push("/estatuto")
					}
				},
				{
					label: 'CNPJ',
					command: () => {
						router.push("/cnpj")
					}
				}
			]
		},
	];

	const projetos = [
		{
			items: projetosList.map(projeto => {
				return {
					label: projeto.nome,
					command: () => {
						router.push(`/projetos#${projeto.nome}`)
					}
				}
			})
		},
	];

	const pesquisa = [
		{
			items: [
				{
					label: 'MOVIMENTOS LITERÁRIOS',
					command: () => {}
				},
				{
					label: 'ENCICLOPÉDIA',
					command: () => {}
				},
				{
					label: 'EDITAIS',
					command: () => {}
				},
				{
					label: 'SISTEMA DE INFORMAÇÃO',
					command: () => {}
				},
				{
					label: 'ROBÓTICA CONTEMPORÂNEA',
					command: () => {}
				},
				{
					label: 'MUTAÇÕES ACADÊMICAS',
					command: () => {}
				},
				{
					label: 'MONOGRAFIA',
					command: () => {}
				},
				{
					label: 'DISSERTAÇÃO EM TESE DE MESTRADO',
					command: () => {}
				},
				{
					label: 'TESE DE DOUTORADO',
					command: () => {}
				},
				{
					label: 'GESTÃO PÚBLICA',
					command: () => {}
				},
				{
					label: 'MEIO AMBIENTE',
					command: () => {}
				},
				{
					label: 'ARTE - MÚSICA - CULTURA POPULAR',
					command: () => {}
				},
				{
					label: 'ESPORTE - RELIGIÃO',
					command: () => {}
				},
				{
					label: 'BIODIVERSIDADE FOLCLÓRICA',
					command: () => {}
				},
				{
					label: 'VALORIZAÇÃO REGIONAL',
					command: () => {}
				},
			]
		},
	];

	const podcast = [
		{
			items: [
				{
					label: 'CANAL DO YOUTUBE',
					command: () => {
						router.push("/estatuto")
					}
				},
				{
					label: 'DOCUMENTÁRIO',
					command: () => {
						router.push("/estatuto")
					}
				},
			]
		},
	];

	return (
		<div className={styles.container}>
			<div className={styles.subContainer}>
				<Link href="/" className={styles.leftHeader}>
					{/* <img src="logo.png" /> */}
					<h1>APGEA</h1>
				</Link>
				
				<nav className={styles.headerNavigator}>
					{/* <Link href="/estatuto">Estatuto</Link>
					<Link href="/ata_fundacao">Ata de Fundação</Link>
					<Link href="/finalidade_especifica">Finalidade Específica</Link>
					<Link href="/podcast">Podcast</Link>
					<Link href="/projetos">Projetos</Link> */}
					<p onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup>INSTITUIÇÃO</p>
					<p onClick={(event) => menu2.current.toggle(event)} aria-controls="popup_menu" aria-haspopup>PROJETOS</p>
					<p onClick={(event) => menu3.current.toggle(event)} aria-controls="popup_menu" aria-haspopup>MUNDO ACADÊMICO</p>
					<p onClick={(event) => menu4.current.toggle(event)} aria-controls="popup_menu" aria-haspopup>PODCAST</p>
					<Menu model={instituicao} popup ref={menu} id="popup_menu" />
					<Menu model={projetos} popup ref={menu2} id="popup_menu" />
					<Menu model={pesquisa} popup ref={menu3} id="popup_menu" />
					<Menu model={podcast} popup ref={menu4} id="popup_menu" />
				</nav>
			</div>
		</div>
	)
}

export { Header };
