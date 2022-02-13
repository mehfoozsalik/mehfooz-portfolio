import React from 'react'
import MainTitle from '../Components/MainTitle'
import AddressDetail from '../Components/address/AddressDetail'
import { motion } from 'framer-motion'
import { ContactContext } from '../Context/contactContext'
import Loading from '../Components/Loading'
import URL from '../Utilities/URL'

function Contact(props) {
  const [submited, setSubmited] = React.useState(false)
  const { loading, contact } = React.useContext(ContactContext)
  const handleSubmit = () => {
    setSubmited(true)
    setTimeout(() => {
      setSubmited(false)
    }, 5000)
  }
  if (loading) {
    return <Loading />
  } else {
    return (
      <div className='container'>
        <div className={submited ? 'alertMessage' : 'alertMessage hideMessage'}>
          <p>Holaa! I have recieved your message. I will contact you soon</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: '-100vh' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='fade-out-effect'
        ></motion.div>
        <div className='page-container'>
          <MainTitle backTitle='Contact' first='Get in ' second='Touch' />
          <div>
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeIn' }}
            >
              {contact.MainHeading}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeIn' }}
            >
              {contact.MainDescription}
            </motion.p>
            <div className='contact-adres-section'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeIn' }}
                className='adress-section'
              >
                {contact &&
                  contact.userInformation.map((contactArray) => {
                    const { contactInfo } = contactArray
                    const { url } = contactInfo.icons.data.attributes
                    return (
                      <AddressDetail
                        image={url}
                        head={contactInfo.heading}
                        detail={contactInfo.description}
                      />
                    )
                  })}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeIn' }}
                className='contact-form'
              >
                <iframe
                  style={{ display: 'none' }}
                  name='hidden_iframe'
                  id='hidden_iframe'
                ></iframe>
                <form
                  action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSd7XxAyOIhng_BO7eR1KK9SKmjBrRIDqedIn3d8K4dFx5fo_w/formResponse'
                  method='post'
                  target='hidden_iframe'
                  onSubmit={handleSubmit}
                  className='form'
                >
                  <div className='single-element'>
                    <label htmlFor='name'>Full Name</label>
                    <input
                      id='name'
                      name='entry.1596993531'
                      placeholder='YOUR FULL NAME...'
                      type='text'
                      required='true'
                    />
                  </div>
                  <div className='single-element'>
                    <label htmlFor='num'>Phone Number</label>
                    <input
                      id='num'
                      name='entry.1786713568'
                      placeholder='YOUR WHATSAPP NUMBER...'
                      type='tel'
                      required='true'
                    />
                  </div>
                  <div className='single-element'>
                    <label htmlFor='email'>Email Address</label>
                    <input
                      id='email'
                      name='entry.1935005680'
                      placeholder='YOUR EMAIL ADDRESS...'
                      type='mail'
                      required='true'
                    />
                  </div>
                  <div className='single-element'>
                    <label htmlFor='sub'>Subject</label>
                    <input
                      id='sub'
                      name='entry.1775807052'
                      placeholder='SUBJECT HERE...'
                      type='text'
                    />
                  </div>
                  <div className='single-element'>
                    <label htmlFor='msg'>message</label>
                    <textarea
                      name='entry.1047515085'
                      id='msg'
                      rows='5'
                      placeholder='YOUR MESSAGE HERE...'
                      required='true'
                    ></textarea>
                  </div>
                  <div className='single-element'>
                    <button type='submit'>
                      <svg
                        width='26'
                        height='18'
                        viewBox='0 0 26 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M23.5556 0H6.44446C5.09634 0 4.00001 1.0764 4.00001 2.4V8C4.00001 8 4.00025 8 4.00001 8.5C3.99977 9 3.99977 9 4.50001 9C5.00025 9 5.00001 9 5.00001 9C5.00001 9 5.00025 9 5.50001 9C5.99977 9 5.99977 9 6.00001 8.5C6.00026 8 6.00001 8 6.00001 8V4L14.2667 10.56C14.4783 10.7156 14.7356 10.7997 15 10.7997C15.2644 10.7997 15.5217 10.7156 15.7333 10.56L24 4V16H15H6.00001C6.00001 16 14.9998 16 14.4998 16C13.9998 16 14 16 14 16.5C14 17 14 17 14 17C14 17 14 17 14 17.5C14 18 13.9998 18 14.4998 18C14.9998 18 6.00001 18 6.00001 18H15H23.5556C24.9037 18 26 16.9236 26 15.6V2.4C26 1.0764 24.9037 0 23.5556 0Z'
                          fill='white'
                        />
                        <rect
                          y='10'
                          width='9'
                          height='2'
                          rx='0.2'
                          fill='white'
                        />
                        <rect
                          x='2'
                          y='13'
                          width='9'
                          height='2'
                          rx='0.2'
                          fill='white'
                        />
                        <rect
                          x='5'
                          y='16'
                          width='8'
                          height='2'
                          rx='0.2'
                          fill='white'
                        />
                      </svg>
                      Send your message
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
