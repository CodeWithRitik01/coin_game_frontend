import styles from "./airdrop.module.css"

function Airdrop(){
    return(
        <div className={styles.outterDiv}>
            <div className={styles.inviteButton}>
              <button>Withdraw Funds</button>
            </div>
            <h2 style={{marginLeft:"20%"}}>Airdrops</h2>
            <div className={styles.airdropContainer}>
                <div className={styles.airdrops}>
                   <div className={styles.airdropItems}>
                      <h3>Swap #VWS</h3>
                      <img src="https://cdn-icons-png.flaticon.com/128/10703/10703250.png" alt="not found"/>
                   </div>
                   <div className={styles.airdropItems}>
                      <h3>Mining Pool #VWS</h3>
                      <img src="https://cdn-icons-png.flaticon.com/128/10703/10703250.png" alt="not found"/>
                   </div>
                   <div className={styles.airdropItems}>
                      <h3>Burned 50% VWS. Rights Revoked</h3>
                      <img src="https://cdn-icons-png.flaticon.com/128/10703/10703250.png" alt="not found"/>
                   </div>
                   <div className={styles.airdropItems}>
                      <h3>Exchange Negotiations</h3>
                      <img src="https://cdn-icons-png.flaticon.com/128/10703/10703250.png" alt="not found"/>
                   </div>
                   <div className={styles.airdropItems}>
                      <h3>Market Maker Negotiations</h3>
                      <img src="https://cdn-icons-png.flaticon.com/128/10703/10703250.png" alt="not found"/>
                   </div>
                   <div className={styles.airdropItems}>
                      <h3>Key Partnerships Are Coming</h3>
                      <img src="https://cdn-icons-png.flaticon.com/128/10703/10703250.png" alt="not found"/>
                   </div>
                   <div className={styles.airdropItems}>
                      <h3>Airdrop Task List</h3>
                      <img src="https://cdn-icons-png.flaticon.com/128/10703/10703250.png" alt="not found"/>
                   </div>
                   <div className={styles.airdropItems}>
                      <h3>Airdrop NFTs ETH</h3>
                      <img src="https://cdn-icons-png.flaticon.com/128/10703/10703250.png" alt="not found"/>
                   </div>
                </div>
            </div>

        </div>
    )
}

export default Airdrop