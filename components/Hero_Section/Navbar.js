const Navbar = () => {
  return (
    <nav className="text-white p-6" >
      <div className="flex justify-between">
        <div className="p-2 text-2xl">
          <div className="font-serif" >Gdsc Cvr Submission</div>
        </div>
        <div className="p-2 text-md">
          <span className="mr-8 hidden md:inline cursor-pointer">Home</span>
          <span className="mr-8 hidden md:inline cursor-pointer">About Me</span>
          <span className="mr-8 hidden md:inline cursor-pointer">Skills</span>
          <span className="mr-8 hidden md:inline cursor-pointer">Contact Me</span>
        </div>
      </div>
    </nav >
  )
}

export default Navbar