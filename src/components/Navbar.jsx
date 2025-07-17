import { useState } from 'react'
import { Link } from 'react-router-dom';
import { House, Lamp, Amphora, BrickWall, Contact, X, Menu } from 'lucide-react'

const Navbar = () => {

  const [open, setOpen] = useState(false)
  console.log(open)

  const onClickHandler = () => {
    setOpen(!open)
  }

  return (
    <>
      <nav className='z-50 sticky flex justify-between top-0 px-3 md:px-10 py-3 bg-white font-heading'>
        <span className='w-1/4 cursor-default text-xl font-bold'>Mittika</span>

        <div className='hidden md:flex justify-between items-center w-3/4'>
          <Link to='/' className='flex gap-3'><House /> Home</Link>
          <Link to='/vases' className='flex gap-3'><Amphora /> Vases</Link>
          <Link to='/lamps' className='flex gap-3'><Lamp /> Lamps</Link>
          <Link to='/wallart' className='flex gap-3'><BrickWall /> Wall Art</Link>
          <Link to='/contact' className='flex gap-3'><Contact /> Contact</Link>
        </div>
        <button className='md:hidden cursor-pointer' onClick={onClickHandler}>
          {open ? <X /> : <Menu />}
        </button>


      </nav>
      {open && (
        <div className='z-50 fixed right-0 top-13 md:hidden flex flex-col gap-5 px-5 py-3 pb-5 bg-white'>
          <Link to='/' className='flex gap-3' onClick={onClickHandler}><House /> Home</Link>
          <Link to='/vases' className='flex gap-3' onClick={onClickHandler}><Amphora /> Vases</Link>
          <Link to='/lamps' className='flex gap-3' onClick={onClickHandler}><Lamp /> Lamps</Link>
          <Link to='/wallart' className='flex gap-3' onClick={onClickHandler}><BrickWall /> Wall Art</Link>
          <Link to='/contact' className='flex gap-3' onClick={onClickHandler}><Contact /> Contact</Link>
        </div>
      )}
    </>
  )
}

export default Navbar
