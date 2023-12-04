import Link from 'next/link'
import {FaLinkedin, FaGithub, FaYoutube, FaTwitch} from 'react-icons/fa'

export default function Home() {
  return (
    <main className='flex items-center justify-center flex-col gap-4 w-3/4 my-32 mx-auto'>
      <h2 className='font-extralight'>Vamos construir algo juntos!?</h2>
      <p className='text-2xl'>Olá, eu sou Rafael Jagochitz Bertoldo</p>
      <p>Um Desenvolvedor web fullstack</p>
      <p>Sou especializado em desenvolvimento web, mais focado em backend e desenvolvimento de API's rest e restfull.</p>
      <section>
        <Link href="https://www.linkedin.com/in/rafaeljbertoldo/"><FaLinkedin /></Link>
        <Link href="https://github.com/rafael-bertoldo"><FaGithub /></Link>
        <Link href="https://www.youtube.com/channel/UCgaiGkU-Dp9ebaiXNXkX3fA"><FaYoutube /></Link>
        <Link href="https://www.twitch.tv/bertoldoverso"><FaTwitch /></Link>
      </section>
    </main>
  )
}
