import { NavLink, useLocation } from "react-router-dom"
import styles from "./footer.module.css"


function Footer(){
    const location = useLocation();
    return (
       <div className={styles.footer}>
            <div className={styles.allIcons}>
                <NavLink to="/" className={({isActive}) => `${isActive ? styles.activeLink:""} ${styles.iconsDiv}`}>
                    <img src="https://cdn-icons-png.flaticon.com/128/16019/16019931.png" alt="not found"/>
                    <p>Home</p> 
                </NavLink>
                <NavLink to="/mine"  className={({isActive}) => `${isActive ? styles.activeLink:""} ${styles.iconsDiv}`}>
                    <img src="https://cdn-icons-png.flaticon.com/128/15766/15766413.png" alt="not found"/>
                    <p>Mine</p> 
                </NavLink>
                <NavLink to="/referral"  className={({isActive}) => `${isActive ? styles.activeLink:""} ${styles.iconsDiv}`}>
                    <img src="https://cdn-icons-png.flaticon.com/128/14807/14807911.png" alt="not found"/>
                    <p>Referral</p> 
                </NavLink>
                <NavLink to="/earn"  className={({isActive}) => `${isActive ? styles.activeLink:""} ${styles.iconsDiv}`}>
                    <img src="https://cdn-icons-png.flaticon.com/128/7650/7650857.png" alt="not found"/>
                    <p>Earn</p> 
                </NavLink>
                <NavLink to="/airdrop"  className={({isActive}) => `${isActive ? styles.activeLink:""} ${styles.iconsDiv}`}>
                    <img src="https://cdn-icons-png.flaticon.com/128/9382/9382196.png" alt="not found"/>
                    <p>Airdrop</p> 
                </NavLink>
            </div>
       </div>
    )
}

export default Footer