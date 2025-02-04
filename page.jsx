import Hero from "@/components/hero"
import About from "@/components/about"
import Courses from "@/components/courses"
import Testimonials from "@/components/testimonials"
import Cta from "@/components/cta"
import Footer from "@/components/footer"
import { ScrollArea } from "@/components/ui/scroll-area"
import Carousel from "@/components/carousel"
import WhyChoose from "@/components/why-choose"
import FAQ from "@/components/faq"
import Nav from "@/components/nav"
import Demo from "@/components/demopopup"
import SnackBar from "@/components/snackbar"
import Programme from "@/components/programme"

export const metadata = {
  title: "PyNet Labs - Transform Your Future with Professional Training",
  description:
    "Join PyNet Labs to master in-demand skills with expert-led training courses. Start your learning journey today!",
  keywords: "professional training, IT courses, technology education, learning platform",
}

export default function Page() {
  return (
    <div className="relative">
      <Nav />
      <ScrollArea className="h-full w-full">
      <Demo/>
        <Carousel />
        <Hero />
        <WhyChoose />
        <About />
        <Courses />
        <Programme/>
        <Testimonials />
        <FAQ />
        <Cta />
        <Footer />
        <SnackBar/>
      </ScrollArea>
    </div>
  )
}

