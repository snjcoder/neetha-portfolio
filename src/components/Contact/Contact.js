import { useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
// import { sendForm } from 'emailjs-com'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Contact.scss'

const Contact = () => {
  const [letterClass] = useState('text-animate')
  const [sender_name, set_sender_name] = useState('')
  const [sender_email, set_sender_email] = useState('')
  const [subject, set_subject] = useState('')
  const [message, set_message] = useState('')
  const form = useRef()

  const handleName = (e) => {
    set_sender_name(e.target.value)
  }
  const handleEmail = (e) => {
    set_sender_email(e.target.value)
  }
  const handleSubject = (e) => {
    set_subject(e.target.value)
  }
  const handlemessage = (e) => {
    set_message(e.target.value)
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ri8851h',
        'template_3v1exaj',
        form.current,
        'lPx_15mtWrTyuMDPk'
      )
      .then(
        (result) => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in Software Developer opportunities - especially
            ambitious or large projects. However, if you have other request or
            question, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Name"
                    value={sender_name}
                    type="text"
                    name="sender_name"
                    onChange={handleName}
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="sender_email"
                    value={sender_email}
                    onChange={handleEmail}
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={handleSubject}
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={handlemessage}
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Satya Neetha Pappala,
          <br />
          Canada,
          <br />
          800 3 St SE 3rd Floor <br />
          Calgary,AB <br />
          <br />
          <span>neethacohort@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[51.043984, 245.938568]} zoom={12}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[51.043984, 245.938568]}>
              <Popup>Neetha lives here, come over for a cup of coffee 🙂</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
