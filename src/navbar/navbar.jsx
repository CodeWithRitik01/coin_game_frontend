import styles from "./navbar.module.css";
import { useEffect, useState } from "react"

import axios from "axios"

function Navbar(){
    const server = process.env.REACT_APP_API_SERVER
    const [username, setUsername] = useState("")

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


   
                <div className={`${styles.otherLinksDiv} ${styles.otherNav}`}>
                    <img src="https://cdn-icons-png.flaticon.com/128/691/691064.png" alt="not found"/>
                    <h3>Connect Wallet</h3>

                </div>
            </div>
        
            
        </div>
    )
}

export default Navbar;