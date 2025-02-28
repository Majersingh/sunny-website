import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import SubscribeForm from '@/components/subscribeinfooter'

export default function Footer() {
  return (
    <footer className="border-t" id='footer'>
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* <div className="space-y-4">
            <h4 className="text-lg font-semibold">About</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Press
                </Link>
              </li>
            </ul>
          </div> */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Courses</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#courses" className="text-sm text-muted-foreground hover:text-foreground">
                  CCNA(200-301)
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-sm text-muted-foreground hover:text-foreground">
                  CCNP ENCOR
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-sm text-muted-foreground hover:text-foreground">
                 AWS
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:support@sovnetworks.com?subject='Help Center'" className="text-sm text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="mailto:support@sovnetworks.com?subject='Contact US'" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 col-span-2">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/sovnetworks/" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Subscribe to our newsletter</p>
               <SubscribeForm/>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} SOV Networks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
