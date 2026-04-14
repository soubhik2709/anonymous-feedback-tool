import styles from "../../styles/components/layout/navbar.module.css";
import Button from "../ui/Button";
export default function Navbar(){
    function handleSubmit(){
        console.log("login button click");
    }
    return(
        <nav className={styles.navbar}>
            <ul className={styles.navlist}>
                <li>Logo</li>
                {/* i dont know how to give and find and attach logo */}
                <li>FeedIn</li> {/* project Name */}
            </ul>
            <ul className={styles.navlist}>
               <Button
               size="md"
            variant="primary"
            disabled={false}
            onClick={handleSubmit}
               >Login</Button>
               <Button
             size="md"
            variant="primary"
            disabled={false}
            onClick={handleSubmit}>
                Get
               </Button>
              
<Button
    size="md"
            variant="primary"
            disabled={false}
            onClick={handleSubmit}
            >Mode</Button>
{/* tell me button or li wich one to choose */}
{/* 
                <li>Login</li>
                <li>Get Started</li> */}

            </ul>
        </nav>
    );
};

/* 
i put  project logo inside li, is it correct?

is it correct  by separating all them ul and all the part in li?

should i make one  button component or as this is inside nav bar so, i can make button design like according to nav?
or ul li is okay for this?

*/