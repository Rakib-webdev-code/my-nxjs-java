import Image from 'next/image';
import React from 'react';
// import Image from "next/image";

const AboutPage = () => {
    return (
        <div>
            <h2>About Us Page</h2>
            <Image src='/images/Myphoto.jpg' width={250} alt="My Photo" height={250} />
            
             <Image
             src="/images/good.jpeg" alt='Photo' width={400}
             height={400}></Image>
             <Image src='https://images.unsplash.com/photo-1788998765211-acd56d4ce4fa'
             alt='Unsplas'
             width={400}
             height={400}/>
        </div>
    );
};

export default AboutPage;