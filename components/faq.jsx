"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useState, useRef } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What does Vxios Labs do?",
    answer:
      "Vxios Labs is a leading IT training institute that provides comprehensive hands-on training in various technology domains. We offer instructor-led live training, career counseling, and placement assistance to help students achieve their career goals in the tech industry.",
  },
  {
    question: "What can you expect from a public training class?",
    answer:
      "In our public training classes, you can expect: \n• Live, interactive sessions with industry expert instructors \n• Hands-on practical exercises and real-world projects \n• Small batch sizes for personalized attention \n• Access to state-of-the-art lab infrastructure \n• Comprehensive study materials and resources \n• Regular assessments and feedback",
  },
  {
    question: "How can we pay the fees?",
    answer:
      "We offer multiple payment options for your convenience: \n• Online payment through credit/debit cards \n• Net banking \n• EMI options available with selected banks \n• Bank transfer \n• Cash payment at our centers \nYou can also opt for our flexible installment plans.",
  },
  {
    question: "How can we perform the labs online?",
    answer:
      "Our online labs are easily accessible through our cloud-based platform: \n• 24/7 access to virtual lab environment \n• Pre-configured tools and software \n• Remote access from any device \n• Technical support available \n• Step-by-step lab guides \n• Auto-saving feature for your work",
  },
  {
    question: "Where can I enroll for the course?",
    answer:
      "You can enroll for our courses through multiple channels: \n• Visit our website and fill out the enrollment form \n• Call our admission counselors \n• Visit our nearest training center \n• Email us at admissions@Vxioslabs.com \n• Chat with our support team online",
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} className="m-2 mt-12 py-4 bg-gray-50" id="faq">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Find answers to common questions about our training programs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border-primary/10">
                  <AccordionTrigger className="text-left hover:text-primary" onClick={() => handleToggle(index)}>
                    {faq.question}
                  </AccordionTrigger>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <AccordionContent className="text-muted-foreground">
                          <p className="whitespace-pre-line">{faq.answer}</p>
                        </AccordionContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
