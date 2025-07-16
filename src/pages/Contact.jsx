import { useState } from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'

const Contact = () => {

    const [submitting, setsubmitting] = useState(false)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        setsubmitting(true)
        setTimeout(() => {
            console.log("submitted")
            setsubmitting(false)
        }, 2000);
        
    }

    return (
        <>
            <Navbar />
            <div>
                <form onSubmit={onSubmitHandler} className='flex flex-col p-10'>
                    <label htmlFor="name">Name *</label>
                    <input required type="text" name='name' id='name' placeholder='Aayush Laddha' className='px-3 py-1' />

                    <label htmlFor="email" className='mt-10'>Email *</label>
                    <input required type="email" name='email' id='email' placeholder='imagiwaeve@gmail.com' className='px-3 py-1' />

                    <label htmlFor="phone" className='mt-10'>Phone</label>
                    <input type="tel" name='phone' id='phone' placeholder='+918420996300' className='px-3 py-1' />

                    <label htmlFor="reson" className='mt-10'>Reason *</label>
                    <input required type="text" name='reason' id='reason' placeholder='Wanted to inquire about few products' className='px-3 py-1' />

                    <label htmlFor="description" className='mt-10'>Description *</label>
                    <textarea required name='description' id='description' rows={5} className='px-3 py-1' placeholder='Im interested in a few of the vases listed on your website and would like to know more about their sizes, materials, and availability. Also, do you offer any discounts on bulk purchases?'></textarea>

                    <button
                        type="submit"
                        className={`mt-10 border-gray-500 w-fit m-auto p-5 py-3 rounded-xl ${submitting ? 'cursor-not-allowed' : 'border cursor-pointer'}`}
                        disabled={submitting}
                    >
                        {submitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Contact
