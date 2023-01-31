import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Img from '../public/background.jpg'
import Header from '@/components/header/header'
import Services from '@/components/services/services'
import Team from '@/components/team/team'
import Contact from '@/components/contact/contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div className={`${inter.className} ${styles.main_div}`}>
            <Header />
            <Image src={Img} alt='img' className={`${styles.img}`} id='home' />
            <Services />
            <Team />
            <Contact />
            <div className={styles.last_border}></div>
        </div>
    )
}
