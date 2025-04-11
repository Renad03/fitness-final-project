import React from 'react'
import ProfilePictures from '../../../Components/ProfilePicture/ProfilePictures'
import BackgroundPicture from '../../../Components/ProfileBackgroundPicture/BackgroundPicture'
import Button from '@mui/material/Button';
import styles from "./coach.module.css"
import ProfileAbout from '../../../Components/ProfileAbout/ProfileAbout';

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
                    <Button className={`${styles["contact-container"]}`} variant="text">Message</Button>
                    </div>
                </div>
            </header>
            <main>
                <div className={`${styles["container"]} container`}>
                    <div className={`${styles["aside-about"]}`}>
                        <ProfileAbout 
                            gender={aboutData.gender}
                            birthday={aboutData.birthday}
                            address={aboutData.address}
                            email={aboutData.email}
                            phone={aboutData.phone}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Coach