import styles from "./AlunoForm.module.css"
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
function AlunoForm({btnText}) {
    return (
        <form className={styles.form}>
            <div>
                <Input
                    type="text"
                    text="Nome do projeto"
                    name="name"
                    placeholder="Insira o nome do projeto"
                />
                <Input
                    type="text"
                    text="Teste do projeto"
                    name="teste"
                    placeholder="Campo de teste"
                />
            </div>
            <div>
                <Input
                    type="number"
                    text="Valor do projeto"
                    name="valor"
                    placeholder="Insira o valor do projeto"
                />
            </div>
            <Select name="category_id" text="Selecione a categoria" />
            <SubmitButton btnText={btnText}/>
</form>
)
}

export default AlunoForm