
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import profilePhoto from "../../Assets/images/profile.jpg";
import styles from "./profilePicture.module.css";
import { useState, useRef, useEffect } from 'react'; // تأكد من استيراد useEffect

const ProfilePictures = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    const handleAvatarClick = () => {
    fileInputRef.current.click();
    };

    const handleSaveImageLocally = () => {
        if (selectedImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
            localStorage.setItem('profileImage', reader.result);
            console.log('تم حفظ الصورة محليًا.');
            };
            fetch(selectedImage)
            .then(res => res.blob())
            .then(blob => reader.readAsDataURL(blob));
        } else {
            console.warn('لم يتم اختيار أي صورة لحفظها محليًا.');
        }
    };

  useEffect(() => { // <--- تم نقل useEffect إلى هنا
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
        setSelectedImage(storedImage);
    }
  }, []); // مصفوفة الاعتماديات الفارغة تعني أن هذا التأثير سيتم تشغيله مرة واحدة فقط بعد أول عملية عرض للمكون

    return (
        <div>
            <div className={`${styles["profile-photo-container"]}`}>
                <Stack direction="row" spacing={2}>
                    <Avatar
                        className={`${styles["profile-photo"]}`}
                        sx={{ width: 180, height: 180, cursor: 'pointer' }} // إضافة cursor للإشارة إلى إمكانية النقر
                        alt="Profile photo"
                        src={selectedImage || profilePhoto} // عرض الصورة المختارة أو الصورة الافتراضية
                        onClick={handleAvatarClick} // ربط حدث الضغط بفتح مربع اختيار الملف
                    />
                </Stack>
            </div>
            <input
                type="file"
                accept="image/*" // السماح فقط بتحميل ملفات الصور
                onChange={handleImageChange}
                style={{ display: 'block' }}
                ref={fileInputRef} // ربط المرجع بعنصر الإدخال
            />
            <button onClick={handleSaveImageLocally}>حفظ الصورة محليًا</button>
        </div>
    );
};

export default ProfilePictures;