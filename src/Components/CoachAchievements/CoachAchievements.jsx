import React from 'react'
import styles from "./CoachAchievements.module.css"
import AchievementCard from './AchievementCard';
import AchieveImageBefore from "../../Assets/images/service-1.jpg"
import AchieveImageAfter from "../../Assets/images/service-2.jpg"

const CoachAchievements = () => {

    const allAchievements = [
        {
            id: 1,
            title: "Achievement 1",
            description: "Completed a rigorous training program to become a certified coach.",
            imageBefore: AchieveImageBefore,
            imageAfter: AchieveImageAfter,
        },
        {
            id: 2,
            title: "Achievement 2",
            description: "Completed a rigorous training program to become a certified coach.",
            imageBefore: AchieveImageBefore,
            imageAfter: AchieveImageAfter,
        },
        {
            id: 3,
            title: "Achievement 3",
            description: "Completed a rigorous training program to become a certified coach.",
            imageBefore: AchieveImageBefore,
            imageAfter: AchieveImageAfter,
        },
        {
            id: 4,
            title: "Achievement 4",
            description: "Completed a rigorous training program to become a certified coach.",
            imageBefore: AchieveImageBefore,
            imageAfter: AchieveImageAfter,
        }
    ]

    return (
        <div>
            <div className={`${styles["cards-container"]} container`}>
                <div className={`${styles["all-achievements"]} row`}>
                    {allAchievements.map((achievement, index) => (
                        <div className={`${styles["achievement-card"]}`} key={index}>
                            <AchievementCard {...achievement} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CoachAchievements