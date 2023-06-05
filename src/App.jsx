import style from "./style"
import { NavBar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from "./components"

function App() {
  return (
    <>
      <div className={`w-full bg-primary overflow-hidden`}>
        <div className={`${style.flexCenter} ${style.paddingX}`}>
          <div className={`${style.boxWidth}`}>
            <NavBar />
          </div>
        </div>

        <div className={`${style.flexStart} ${style.paddingX}`}>
          <div className={`${style.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`${style.flexStart} ${style.paddingX}`}>
          <div className={`${style.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
