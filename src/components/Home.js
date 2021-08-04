import React from 'react'
import elly from '../images/elly.jpg'

function Home() {
  return (
    <section className="homepage section">
      <div className="home-wrapper container">
        <h3 className="subheading">Home Page Section</h3>
        <img src={elly} />
        <p>Welcome!

        I live in Stoke Newington, Hackney in London with my family.

        I trained as a doula (and later as a KGHypnobirthing teacher) following the birth of my daughter in 2018. Her birth came after several years of infertility, IVF and pregnancy loss. Once I was ready to believe it was really happening, I put everything into finding out all I could about pregnancy and birth. I was determined to not let the birth of my child be defined by the medical intervention that defined her conception. As IVF pregnancies are often categorised as ‘high risk’, this was not straightforward. However, I did end up having an extremely positive birth experience, one that I believe may not have been possible if I hadn’t prepared in the way that I did and if I had not armed myself with the knowledge of the legal rights that we all have in birth (having over a decade of advocating for others as a human rights lawyer may have helped).

        I feel privileged to have experienced being pregnant and giving birth, and was not ready to leave that world behind. Find out more in my &apos;About Me&apos; section</p>
      </div>
    </section>
  )
}

export default Home