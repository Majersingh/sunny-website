import Hero from "@/components/hero"
import About from "@/components/about"
import Courses from "@/components/courses"
import Testimonials from "@/components/testimonials"
import Cta from "@/components/cta"
import Carousel from "@/components/carousel"
import WhyChoose from "@/components/why-choose"
import FAQ from "@/components/faq"
import Demopopup from "@/components/demopopup"
import SnackBar from "@/components/snackbar"
import Programme from "@/components/programme"
import Partners from "@/components/ourpartners"


export const metadata = {
  title: "SOV Networks - Transform Your Future with Professional Training",
  description:
    "Join SOV Networks to master in-demand skills with expert-led training courses. Start your learning journey today!",
  keywords: "professional training, IT courses, technology education, learning platform",
}

export default function Page() {
  return (
    <div className="relative">
        <Demopopup/>
        <Carousel />
        <Hero />
        <WhyChoose />
        <About />
        <section  className="py-12" id="courses">
          <Courses />
        </section>
        <section  className="py-12" id="programs">
          <Programme/>
        </section>
        <Partners/>
        <Testimonials />
        <FAQ />
        <Cta />
        <SnackBar/>
    </div>
  )
}

