import Container from "../components/layout/Container";
import Hero from "../components/layout/Hero";
import Button from "../components/ui/Button";
import SectionBox from "../components/ui/SectionBox";
export default function Homepage() {
  return (
    <>
      <Container>
        <Hero>
          <span className="mb-6 inline-block text-lg font-bold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full">
            Free No login for responders
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight max-w-2xl">
            Collect honest feedback , <br /> anynomously
          </h1>
          <p className="px-3 lg:p-4 mt-5 lg:mt-7 text-base lg:text-lg text-gray-600 max-w-2xl ">
            Create a form, share the link, and let people tell you what they
            really think — no logins, no names.
          </p>

          <div className="mt-10">
            <Button variant="primary" size="lg">
              Create Your Feedback Form →
            </Button>
          </div>

          <p className="mt-6 text-base text-gray-500">
            Free to use · Results only you can see
          </p>
        </Hero>

       <section className="bg-white mt-3 p-7 rounded-lg  min-h-[400px] shadow-md">
        <div className="my-5">
          <p className="font-semibold text-xl">How it works</p>
          <p className="font-bold text-2xl ">3 simple steps</p>
          {/* should i use p tag for this ?or use something anothre? */}
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-2"> 
          <SectionBox  
          counts= {1}
          title= "Create your form"
          text = "Write your questions. Choose types — text, rating, or multiple choice."
          />
          <SectionBox  
          counts= {2}
          title= "Share your link"
          text = "Copy your unique link. Share with anyone — team, class, or friends."
          />
          <SectionBox  
          counts= {3}
          title= "Read honest responses"
          text = "All responses are anonymous. View results on your dashboard anytime."          
          />
        </div>
       </section>

        <section className="bg-white shadow-md mt-3 p-7 rounded-lg  min-h-[400px] ">
        <div className="my-5">
          <p className="font-semibold text-xl">Who uses it</p>
          <p className="font-bold text-2xl ">Built for everyone</p>
          {/* should i use p tag for this ?or use something anothre? */}
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-2"> 
          <SectionBox  
          counts= {1}
          title= "Teachers"
          text = "Get real feedback on your class and teaching style."
          />
          <SectionBox  
          counts= {2}
          title= "Managers"
          text = "Understand how your team really feels without pressure."
          />
          <SectionBox  
          counts= {3}
          title= "Students"
          text = "Collect honest peer reviews for projects and presentations."          
          />
        </div>
       </section>


      </Container>
    </>
  );
}
