import styles from "./footer.module.css"

function Footer(){
    return (
       <div className={styles.footer}>
            <div className={styles.allIcons}>
                <div className={styles.iconsDiv}>
                    <img src="https://cdn-icons-png.flaticon.com/128/16019/16019931.png" alt="not found"/>
                    <p>Home</p> 
                </div>
                <div className={styles.iconsDiv}>
                    <img src="https://cdn-icons-png.flaticon.com/128/15766/15766413.png" alt="not found"/>
                    <p>Mine</p> 
                </div>
                <div className={styles.iconsDiv}>
                    <img src="https://cdn-icons-png.flaticon.com/128/14807/14807911.png" alt="not found"/>
                    <p>Refferal</p> 
                </div>
                <div className={styles.iconsDiv}>
                    <img src="https://cdn-icons-png.flaticon.com/128/7650/7650857.png" alt="not found"/>
                    <p>Earn</p> 
                </div>
                <div className={styles.iconsDiv}>
                    <img src="https://cdn-icons-png.flaticon.com/128/9382/9382196.png" alt="not found"/>
                    <p>Airdrop</p> 
                </div>
            </div>
       </div>
    )
}

export default Footer