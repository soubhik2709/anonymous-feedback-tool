//Navbar.tsx
import styles from "../../styles/components/layout/navbar.module.css";
import Button from "../ui/Button";
import logo from '../../assets/wave-sound.png'
import { Sun } from 'lucide-react';
export default function Navbar() {
  function handleSubmit() {
    console.log("login button click");
  }
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlist} onClick={handleSubmit}>
       <img className={styles.logo}src={logo} alt="Logo"/>
        <li >FeedIn</li> 
      </ul>
      <ul className={styles.navlist}>
        <Button
          size="md"
          variant="primary"
          disabled={false}
          onClick={handleSubmit}
        >
          Login
        </Button>
        <Button
          size="md"
          variant="primary"
          disabled={false}
          onClick={handleSubmit}
        >
          Get
        </Button>

        <Button
          size="md"
          variant="primary"
          disabled={false}
          
        >
          <Sun className={styles.sunLogo} onClick={handleSubmit} />
        </Button>
        {/* tell me button or li wich one to choose */}
        {/* 
                <li>Login</li>
                <li>Get Started</li> */}
      </ul>
    </nav>
  );
}

/* 
i put  project logo inside li, is it correct?

is it correct  by separating all them ul and all the part in li?

should i make one  button component or as this is inside nav bar so, i can make button design like according to nav?
or ul li is okay for this?

*/