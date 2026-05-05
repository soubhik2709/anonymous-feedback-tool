//Navbar.tsx
import Button from '../ui/Button';
import logo from '../../assets/wave-sound.png'
import { Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
type PublicNavbarProps = {
onguideClick :()=> void;
};
export default function PublicNavbar({onguideClick}:PublicNavbarProps) {
return(
<nav className='w-full border-b border-gray-200 bg-slate-200 py-3 lg:py-4'>
<div className="max-w-6xl mx-auto px-3 lg:px-7 flex flex-row  md:flex-row items-center justify-between gap-1 lg:gap-4">

      <Link to="/" className="flex items-center gap-2 cursor-pointer">
        <img src={logo} alt="FeedIn logo" className="h-7 lg:h-9 w-7 lg:w-9" />
        <span className="text-xl lg:text-2xl font-bold text-indigo-600">FeedIn</span>
      </Link>

      <div className="flex items-center  justify-between gap-3">
        <Button
        onClick={onguideClick}
         variant="primary" size="md">Guide</Button>
        <Button variant="secondary" size="md">Login</Button>
        <button className="p-2 rounded-lg hover:bg-gray-100 transition">
          <Sun size={18} className="text-gray-600" />
        </button>
      </div>
</div>
</nav>
)
}