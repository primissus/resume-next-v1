import GlitchImg from '@/components/GlitchImg';
import ImgProfile from '@/assets/profile.png';

function Header() {
    return (
        <div className="p-4">
            <nav>
                <ul className="flex flex-row">
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>About</li>
                    <li>Get in Touch</li>
                </ul>
            </nav>
        </div>
    );
}

export default function Home() {
    return (
        <div>
            <Header />

            <GlitchImg src={ImgProfile} className="max-w-200-px w-1/2" />
        </div>
    );
}
