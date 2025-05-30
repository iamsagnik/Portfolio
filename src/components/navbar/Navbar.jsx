import CustomNav from './CustomNav';

function Navbar() {
  return (
    <header className="sticky z-50 top-0 user-select-none ">
      <div className=" flex flex-grow justify-between items-center ">
        <nav className="px-4 mt-2 py-2 mx-auto bg-[#282828] rounded-4xl ">
          <ul className='flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6 font-bold text-sm sm:text-md text-center'>
            <li>
              <CustomNav to="#/home#hero">Home</CustomNav>
            </li>
            <li>
              <CustomNav to="#/home#projects">Projects</CustomNav>
            </li>
            <li>
              <CustomNav to="#/home#about">About</CustomNav>
            </li>
            <li>
              <CustomNav to="#/home#contact">Contact</CustomNav>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar