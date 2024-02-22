import styles from "./Aluno.module.css"
import AlunoForm from "../aluno/AlunoForm";

function Aluno(){
    return(
        <div className={styles.cadastraraluno_container}>
            <h1>Cadastrar Aluno</h1>
            <p>Cadastre os alunos</p>
            <AlunoForm btnText="Criar Projeto"/>
        </div>
    )
}

export default Aluno

