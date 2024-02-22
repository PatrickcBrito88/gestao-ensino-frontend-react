import styles from "./Home.module.css"
import escola from "../../img/escola.png"
import LinkButton from "../../layout/LinkButton";

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem vindo à <span>Gestão Ensino</span></h1>
            <p>Comece a gerenciar sua escola agora mesmo!</p>
            <LinkButton to="/newproject" text="New Project" />
            <img src={escola} alt="Gestão Ensino"/>
        </section>
    )
}

export default Home

