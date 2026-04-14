import Container from "../components/layout/Container";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import SectionWrap from "../components/layout/SectionWrap";
// import SectionBox from "../components/ui/SectionWrap.js";
export default function Homepage(){
    return(
<Container>
<Header></Header>
<Hero/>
<SectionWrap/>
<Footer/>
</Container>

    )
}