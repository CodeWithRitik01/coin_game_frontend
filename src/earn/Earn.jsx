import styles from "../mine/mine.module.css"

function Earn(){
    return(
        <div className={styles.outterDiv}>
            <div className={styles.content}>
            <div className={styles.item}>
                    <img src="https://cdn-icons-png.flaticon.com/128/9382/9382196.png" alt="not Found"/>
                    <div className={styles.insideItem}>
                        <h3>Daily Bonus</h3>
                        <span><img src="https://cdn-icons-png.flaticon.com/128/9382/9382196.png" alt="not Found"/> +100</span>
                    </div>
                </div>
                <h2>Tasks list</h2>
                <div className={styles.item}>
                    <img src="https://clickervwsgame.pw/public/images/clicker_vws.jpg" alt="not Found"/>
                    <div className={styles.insideItem}>
                        <h3>ClickerVWS</h3>
                        <span><img src="https://cdn-icons-png.flaticon.com/128/9382/9382196.png" alt="not Found"/> +15000</span>
                    </div>
                </div>

                <div className={styles.item}>
                    <img src="https://clickervwsgame.pw/public/images/clicker_vws_chat.jpg" alt="not Found"/>
                    <div className={styles.insideItem}>
                        <h3>ClickerVWS Chat</h3>
                        <span><img src="https://cdn-icons-png.flaticon.com/128/9382/9382196.png" alt="not Found"/> +15000</span>
                    </div>
                </div>

                <div className={styles.item}>
                    <img src="https://clickervwsgame.pw/public/images/magic_vip_club_international.jpg" alt="not Found"/>
                    <div className={styles.insideItem}>
                        <h3>Magic Vip Club International</h3>
                        <span><img src="https://cdn-icons-png.flaticon.com/128/9382/9382196.png" alt="not Found"/> +10000</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Earn