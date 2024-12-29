import styles from './styles.module.css'
export default function HomePage() {
    return(
        <>
        <main className={styles.main}>
            <section className={styles.finance_operations}>
                <article className={styles.balance_title_container}>
                    <p className={styles.balance_title}>Balance</p>
                </article>
                
                <article className={styles.balance_container}>
                    
                    {/* adicionar variável */}
                <h1 className={styles.balance}></h1>
                </article>

                <article className={styles.finance_main_operations}>
                    <div className={styles.deposit}>
                        
                    </div>

                    <div className={styles.withdraw}>

                    </div>

                    <div className={styles.transactions}>

                    </div>

                    <div className={styles.investment}>
                        
                    </div>


                </article>


                <div className={styles.investments_operations}>
                    <article className={styles.investments}>
                        <h2 className={styles.investments_title}>Invest your money</h2>
                        <p className={styles.investments_text}>Let your money work for you.</p>
                    </article>

                    <article className={styles.crypto}>
                        <h2 className={styles.crypto_title}>Buy criptocurrency</h2>
                        <p className={styles.crypto_text}>Invest in the future of currency</p>
                    </article>
                </div>
                    

                </section>
            
        </main>
        </>
    )
}