import styles from "./mine.module.css"
import { NavLink, useLocation } from "react-router-dom"

function Mine(){
    return(
        <div className={styles.outterDiv}>
            <div className={styles.top}>       
                <NavLink>Swap</NavLink>
                <NavLink>Mining</NavLink>
                <NavLink>NFT</NavLink>
                <NavLink>Drop</NavLink>
            </div>

            <div className={styles.content}>
                <h2>Tasks list</h2>
                <div className={styles.item}>
                    <img src="https://cdn-icons-png.flaticon.com/128/11881/11881900.png" alt="not Found"/>
                    <div className={styles.insideItem}>
                        <h3>Swap VWS/TON</h3>
                        <span><img src="https://cdn-icons-png.flaticon.com/128/9382/9382196.png" alt="not Found"/> +10000</span>
                    </div>
                </div>

                <div className={styles.item}>
                    <img src="https://cdn-icons-png.flaticon.com/128/11881/11881900.png" alt="not Found"/>
                    <div className={styles.insideItem}>
                        <h3>Swap MVP/TON</h3>
                        <span><img src="https://cdn-icons-png.flaticon.com/128/9382/9382196.png" alt="not Found"/> +10000</span>
                    </div>
                </div>

                <div className={styles.item}>
                    <img src="https://cdn-icons-png.flaticon.com/128/3904/3904303.png" alt="not Found"/>
                    <div className={styles.insideItem}>
                        <h3>Swap xRocket</h3>
                        <span><img src="https://cdn-icons-png.flaticon.com/128/9382/9382196.png" alt="not Found"/> +10000</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mine