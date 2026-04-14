import style from "../../styles/components/layout/Hero.module.css";
import Button from "../ui/Button"

export default function Hero(){
function handleSubmit(){
console.log("Demo");
}

    return(
<div className={style.box}>
             <p>Free · No login for responders</p>
            <h1>Collect honest feedback,<br/>anonymously</h1>
            <h3>Create a form, share the link, and let people tell you what <br/>they really think — no logins, no names.</h3>
            <Button
            size="lg"
            variant="secondary"
            disabled={false}
            onClick={handleSubmit}
            >
            Create Your Feedback Form →
            </Button>
            <p>Free to use · Results only you can see</p>
</div>
    );
};

/* 

should i make a container component and put them  inside?
should i make the each tag in individual div?
how to give style them minimaly?
*/