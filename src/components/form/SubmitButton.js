import styles from "./Submit.button.module.css"
function SubmitButton({ btnText }){
    return (
        <div>
            <button className={styles.btn}>{btnText}</button>
        </div>
    )
}

export default SubmitButton