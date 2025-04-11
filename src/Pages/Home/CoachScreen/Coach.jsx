import React from 'react'
import ProfilePictures from '../../../Components/ProfilePicture/ProfilePictures'
import BackgroundPicture from '../../../Components/ProfileBackgroundPicture/BackgroundPicture'
import Button from '@mui/material/Button';
import styles from "./coach.module.css"
import ProfileAbout from '../../../Components/ProfileAbout/ProfileAbout';
import CoachAchievements from '../../../Components/CoachAchievements/CoachAchievements';

const Coach = () => {

    const aboutData = {
        gender: 'Male',
        birthday: 'Fib 1, 2003',
        address: 'Cairo',
        email: 'mostafa@gmail.com',
        phone: '00201020934202',
    };

    return (
        <div>
            <header className={`${styles}`}>
                <div className={`${styles["main-profile"]} container`}>
                    <div className={`${styles["profile-background"]}`}>
                        <BackgroundPicture />
                    </div>
                    <div className={`${styles["profile-picture-content"]}`}>
                        <ProfilePictures />
                    </div>
                    <div className={`${styles["contact-container"]}`}>
                    {/* <a href={link} className={`btn service-btn text-white position-absolute bottom-0 fs-6 p-3 mx-auto`}>Message</a> */}
                        <Button sx={{color: "var(--white-color)",backgroundColor: "var(--red-main-color)", padding:1, textTransform: "none" }} size="small">Message</Button>
                    </div>
                </div>
            </header>
            <main>
                <div className={`container ${styles["main-container"]}`}>
                    <div className={`${styles["aside-about"]}`}>
                        <ProfileAbout 
                            gender={aboutData.gender}
                            birthday={aboutData.birthday}
                            address={aboutData.address}
                            email={aboutData.email}
                            phone={aboutData.phone}
                        />
                    </div>
                    <div className={`${styles["container"]}`}>
                        <CoachAchievements />
                    </div>
                </div>
                <div className={`${styles["other-coaches"]} container`}>
                    <h2>Other Coaches from coaches component</h2>
                </div>
            </main>
            
        </div>
    )
}

export default Coach