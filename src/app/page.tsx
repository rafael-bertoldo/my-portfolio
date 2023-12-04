import Link from 'next/link'
import {FaLinkedin, FaGithub, FaYoutube, FaTwitch} from 'react-icons/fa'

export default function Home() {
  return (
    <main className='flex items-center justify-center flex-col gap-4 w-3/4 my-32 mx-auto'>
      <h2 className='font-extralight'>Vamos construir algo juntos!?</h2>
      <p className='text-4xl text-center'>Olá, eu sou <span className='text-indigo-500'>Rafael Jagochitz Bertoldo</span></p>
      <p className='text-4xl text-center'>Um Desenvolvedor web fullstack</p>
      <p>Sou especializado em desenvolvimento web, mais focado em backend e desenvolvimento de API's rest e restfull.</p>
      <section className='flex gap-4'>
        <Link className='hover:scale-150' href="https://www.linkedin.com/in/rafaeljbertoldo/"><FaLinkedin size={24} /></Link>
        <Link className='hover:scale-150' href="https://github.com/rafael-bertoldo"><FaGithub size={24} /></Link>
        <Link className='hover:scale-150' href="https://www.youtube.com/channel/UCgaiGkU-Dp9ebaiXNXkX3fA"><FaYoutube size={24} /></Link>
        <Link className='hover:scale-150' href="https://www.twitch.tv/bertoldoverso"><FaTwitch size={24} /></Link>
      </section>
    </main>
  )
}
