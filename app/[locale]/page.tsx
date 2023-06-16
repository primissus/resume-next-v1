import Image from 'next/image';
import profilePicture from '@assets/profile.png';

export default function Home() {
    return <Image src={profilePicture} alt="" />;
}
