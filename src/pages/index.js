import * as React from 'react'
import { Helmet } from 'react-helmet'
import NavBar from '../components/NavBar'
import Presentation from '../components/Presentation'
import About from '../components/About'
import Services from '../components/services/Services'
import Stats from '../components/Stats'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Available from '../components/Available'
import Contact from '../components/contact/Contact'
import './style.css'

// markup
const IndexPage = () => {
    return (
        <div className="font-regular min-h-screen min-w-screen bg-site-background text-primary overflow-y-hidden">
            <Helmet>
                <html lang="fr" />
                <meta charSet="utf-8" />
                <title>
                    Dylan Belouis developpeur web
                </title>
                <meta
                    name="description"
                    content="site de dylan belouis développeur web frontend fullstack react gatsby next"
                />
                <meta
                    name="google-site-verification"
                    content="ca7u7GMXe6n3aqnzsFOyf9iwVOHG6NAMCHPZVeut2bI"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                ></meta>
                <script type="application/ld+json">
                    {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://dylanbelouis.netlify.app",
          "name": "Dylan Belouis Portfolio",
        }
      `}
                </script>
            </Helmet>
            <NavBar />
            <Presentation />
            <About />
            <Services />
            <Stats />
            <Portfolio />
            <Testimonials />
            <Available />
            <Contact />
        </div>
    )
}

export default IndexPage
