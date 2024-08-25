
import { useEffect, useState } from "react"
import styles from "./home.module.css"
import axios from "axios"

function Home(){
    const [coinNumber, setCoinNumber] = useState(0);
    const server = process.env.REACT_APP_API_SERVER
    const [loading, setLoading] = useState(true)

    const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        }
      };

    //adding points to database after 1 sec of balance update
    const sendUpdatesToServer = async () =>{
        try{
            await axios.post(`${server}/points/create`,{
                points:coinNumber
            }, config)
        }catch(error){
            console.error("Failed to update points:", error);
        }
    }

    useEffect(() =>{
        const interval = setInterval(sendUpdatesToServer, 1000);

        return () => clearInterval(interval);
    },[coinNumber])


    //to retrieve data after every refresh
    const getPointsData = async() =>{
        try {
            const data = await axios.get(`${server}/points/getPoints`)
            setCoinNumber(data.data.data.points)
            setLoading(false)
        } catch (error) {
            console.error("Failed to get points:", error);

        }

    }

    useEffect(()=>{
        getPointsData();
    },[])

    if(loading){
        <div>Loading...</div>
    }


    //updating coins number in real time
    const ChangeCoinNo = () =>{
        setCoinNumber((prev) =>prev+1)
    }
    return (
        <div className={styles.outterDiv}>
            <div className={styles.topDiv}>
                <div className={styles.topSubDiv}>
                    <p>Earn per tap</p>
                    <h3>1</h3>
                </div>
                <div className={styles.topSubDiv}>
                    <p>coins to level up</p>
                    <h3>10000</h3>
                </div>
                <div className={styles.topSubDiv}>
                    <p>profit per hour</p>
                    <h3>0</h3>
                </div>
            </div>

            <div className={styles.centerEle}>
                <p>Level 1/10</p>
                <div className={styles.coinTrack}>
                    <img src="https://cdn-icons-png.flaticon.com/128/9382/9382196.png" alt="not found"/>
                    <h1>{coinNumber}</h1>
                </div>

            </div>

            <img onClick={ChangeCoinNo} className={styles.astro} src="https://cdn-icons-png.flaticon.com/128/14465/14465077.png" alt="not found"/>

        </div>
    )
}

export default Home