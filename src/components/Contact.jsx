import React from 'react'
import { storeInfo, openingHours, socials } from '../../constants/index.js'

const Contact = () => {
  return (
    <footer id="contact">
      <img src="/images/hero-left-leaf.png" alt="left-leaf" id="f-left-leaf" />
      <img src="/images/hero-right-leaf.png" alt="right-leaf" id="f-right-leaf" />

      <div className="content">
        <div>
          <h2>{storeInfo.heading}</h2>
          <div className="mt-10 space-y-4">
            <p>{storeInfo.address}</p>
            <p>{storeInfo.contact.phone}</p>
            <p>{storeInfo.contact.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3>Opening Hours</h3>
            {openingHours.map((time, index) => (
              <p key={index}>{time.day}: {time.time}</p>
            ))}
          </div>

          <div>
            <h3>Socials</h3>
            <div className="flex justify-center gap-5 mt-4">
              {socials.map((social, index) => (
                <a key={index} href={social.url} className="hover:opacity-80 transition-opacity">
                  <img src={social.icon} alt={social.name} className="w-10 h-10" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contact
