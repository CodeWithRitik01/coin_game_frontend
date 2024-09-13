import styles from "./referral.module.css"
import myImage from '../ASSETS/images/images.jpg';

function Referral(){
    return(
        <div className={styles.outterDiv}>
            <div className={styles.profileDiv}>
                <div className={styles.astraImg}>
                <img src={myImage} alt="not found" />
                </div>
                <h1>Invite Friends!</h1>
                <p>You and your friend will receive bonuses</p>
                
                <div className={styles.referralLinkDiv}>
                    <h4>Your Referral link</h4>
                    <div className={styles.linkDiv}>
                        <p>https://t.me//ClickerVWSBot/Play?startapp  <img src="https://cdn-icons-png.flaticon.com/128/13359/13359691.png" alt="not found"/></p>
                    </div>
                </div>
                <div className={styles.inviteButton}>
                <button >Invite a friend</button>
                </div>
            </div>
        </div>
    )
}

export default Referral