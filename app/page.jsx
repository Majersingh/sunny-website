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
import Blogs from "@/components/blogcard"

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
        <Blogs/>
        <Partners/>
        <Testimonials />
        <FAQ />
        <Cta />
        <SnackBar/>
    </div>
  )
}

