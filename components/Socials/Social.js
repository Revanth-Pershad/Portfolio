import React from 'react'

const Social = () => {
  return (
    <footer class="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 pb-20 pt-5 px-20">
      <div className='w-full text-center text-4xl text-white font-serif mb-5'>Socials</div>
      <div className='w-full'>
        <div className='flex flex-wrap justify-center'>
         
          <a className='mx-10 mt-5' href='https://www.linkedin.com/in/revanth-pershad-217937245'>
            <img src='/linkedin.png' />
          </a>
          <a className='mx-10 mt-5' href='https://www.hackerrank.com/revanthpershad'>
            <img src='/hackerrank.png' />
          </a>
          <a className='mx-10 mt-5' href='https://www.instagram.com/revanthpershad/'>
            <img src='/instagram.png' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Social
