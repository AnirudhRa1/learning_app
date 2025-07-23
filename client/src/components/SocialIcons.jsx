import React from 'react'
import { Link } from 'react-router-dom'
import { 
  LinkedinLogo, 
  GithubLogo, 
  GitBranch, 
} from 'phosphor-react'

const SocialIcons = () => {
  return (
    <div className='flex items-center gap-3 mt-5 ml-1 mb-2 max-md:mt-4'>
      
      <Link 
        target='_blank' 
        to='https://www.linkedin.com/in/anirudh-rai-722a8a190/'
        className="group transition transform hover:scale-110 text-[#1e17ea] hover:text-blue-600"
      >
        <LinkedinLogo size={34} weight="fill" className="transition-colors duration-300" />
      </Link>
      <Link 
        target='_blank' 
        to='https://github.com/AnirudhRa1'
        className="group transition transform hover:scale-110 text-[#c2baba] hover:text-gray-500"
      >
        <GithubLogo size={34} weight="fill" className="transition-colors duration-300" />
      </Link>
      <Link 
        target='_blank' 
        to='https://github.com/AnirudhRa1/learning_app'
        className="group transition transform hover:scale-110 text-[#e01d1d] hover:text-red-600"
      >
        <GitBranch size={34} weight="fill" className="transition-colors duration-300" />
      </Link>
    </div>
  )
}

export default SocialIcons
