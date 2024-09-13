import styles from "./navbar.module.css";
import { useEffect, useState } from "react"
import myImage from '../ASSETS/images/download (1).jpg';
import myImage1 from '../ASSETS/images/download (2).jpg';
import myImage2 from '../ASSETS/images/download (3).jpg';
import myImage3 from '../ASSETS/images/download.png';


import axios from "axios"

function Navbar(){
    const server = process.env.REACT_APP_API_SERVER
    const [username, setUsername] = useState("")
    const [divVisible, setDivVisible] = useState(false);


    //getting user's detail
    const getUserDetails = async() =>{
        try {
            const userDetail = await axios.get(`${server}/points/user`)
            setUsername(userDetail.data.username)

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() =>{
        getUserDetails()
    },[])
    



    return (
        <div>
            <div className={styles.main}>
              <div className={`${styles.logoDiv} ${styles.otherNav}`}>
                    <img className={styles.logo} src="https://cdn-icons-png.flaticon.com/128/14024/14024002.png" alt="Not found"/>
                    <h2>{username}</h2>
                </div>


          
                <div onClick={()=>setDivVisible(true)} className={`${styles.otherLinksDiv} ${styles.otherNav}`}>
                    <img src="https://cdn-icons-png.flaticon.com/128/691/691064.png" alt="not found"/>
                    <h3>Connect Wallet</h3>

                </div>
               

          
 
            </div>
     
                <div className={`${styles.outterWalletDiv} ${divVisible ? styles.visible : ''}`}>
                <div className={styles.walletDiv}>
                   <div className={styles.top}>
                       <img src="https://cdn-icons-png.flaticon.com/128/13651/13651476.png" alt="not Found" />
                       <img onClick={() => setDivVisible(false)} src="https://cdn-icons-png.flaticon.com/128/11741/11741047.png" alt="not Found" />
                   </div>

                   <div className={styles.textWritten}>
                      <h2>Connect your wallet</h2>
                      <p>Open Wallet in Telegram or select your wallet to connect</p>
                   </div>

                   <button className={styles.openWallet}>
                    <img src="https://cdn-icons-png.flaticon.com/128/10837/10837483.png" alt="not found" />
                    <h3>Open Wallet in Telegram</h3>
                    <img src="https://cdn-icons-png.flaticon.com/128/2504/2504941.png" alt="not found" />
                   </button>

                   <div className={styles.allTonDiv}>
                       <div className={styles.tonDivs}>
                        <img src={myImage} alt="not found" />
                        <h4>Tonkeeper</h4>
                       </div>

                       <div className={styles.tonDivs}>
                        <img src={myImage1} alt="not found" />
                        <h4>My TonWallet</h4>
                       </div>

                       <div className={styles.tonDivs}>
                        <img src={myImage2} alt="not found" />
                        <h4>Tonhub</h4>
                       </div>

                       <div className={styles.tonDivs}>
                        <img src={myImage3} alt="not found" />
                        <h4>DeWallet</h4>
                       </div>
                   </div>
                </div>
                </div>

    
        </div>
    )
}

export default Navbar;