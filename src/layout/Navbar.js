import {Link} from "react-router-dom";
import React from "react";
import Container from "./Container";
import logo from "../img/livro.png"
import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Home" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/aluno">Aluno</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/boletim">Boletim</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/disciplina">Disciplina</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/professor">Professor</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/turma">Turma</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar