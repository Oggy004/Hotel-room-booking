import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })
    const [showSuccessAlert, setShowSuccessAlert] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowSuccessAlert(true)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }

    return (
        <div className="luxury-page min-h-screen">
            <div className="bg-[#211c18] px-4 pb-16 pt-32 text-center text-white sm:px-6 md:px-16">
                <div className="mx-auto flex max-w-7xl flex-col items-center">
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c49a6c]">Contact</p>
                    <h1 className="mt-4 text-5xl font-semibold md:text-6xl">Get in Touch</h1>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#dfd2c6]">Our team is ready to help with reservations, events, and special stay requests.</p>
                </div>
            </div>

            <div className="px-4 py-12 sm:px-6 md:px-16">
                <div className="mx-auto mb-12 grid max-w-7xl gap-6 md:grid-cols-3">
                    <div className="bg-white p-6 shadow-[0_18px_45px_rgba(45,35,26,0.08)]">
                        <div className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-#b98a5a">Address</div>
                        <h3 className="mb-2 text-2xl font-semibold text-[#211c18]">City Center</h3>
                        <p className="text-sm leading-7 text-[#6f6257]">123 Hotel Street, City Center<br />Luxury City, Country - 123456</p>
                    </div>

                    <div className="bg-white p-6 shadow-[0_18px_45px_rgba(45,35,26,0.08)]">
                        <div className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-#b98a5a">Phone</div>
                        <h3 className="mb-2 text-2xl font-semibold text-[#211c18]">Reservations</h3>
                        <p className="text-sm leading-7 text-[#6f6257]">+91 1234-567-890<br />+91 9876-543-210</p>
                    </div>

                    <div className="bg-white p-6 shadow-[0_18px_45px_rgba(45,35,26,0.08)]">
                        <div className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-#b98a5a">Email</div>
                        <h3 className="mb-2 text-2xl font-semibold text-[#211c18]">Guest Care</h3>
                        <p className="text-sm leading-7 text-[#6f6257]">info@veronastay.com<br />support@veronastay.com</p>
                    </div>
                </div>

                <div className="mx-auto max-w-3xl bg-white p-8 shadow-[0_18px_45px_rgba(45,35,26,0.08)]">
                    <h2 className="mb-6 text-3xl font-semibold text-[#211c18]">Send us a Message</h2>

                    {showSuccessAlert && (
                        <div className="mb-6 inline-flex w-full items-start space-x-3 border border-[#d8c7b5] bg-white p-4 text-sm">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0">
                                <path d="M16.5 8.31V9a7.5 7.5 0 1 1-4.447-6.855M16.5 3 9 10.508l-2.25-2.25" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="flex-1">
                                <h3 className="font-medium text-[#211c18]">Successfully saved!</h3>
                                <p className="text-[#6f6257]">Your message has been sent. Our team will get back to you soon.</p>
                            </div>
                            <button
                                type="button"
                                aria-label="close"
                                onClick={() => setShowSuccessAlert(false)}
                                className="mb-auto cursor-pointer text-[#9a7654] transition hover:text-[#211c18] active:scale-95"
                            >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="12.532" width="17.498" height="2.1" rx="1.05" transform="rotate(-45.74 0 12.532)" fill="currentColor" fillOpacity=".7" />
                                    <rect x="12.531" y="13.914" width="17.498" height="2.1" rx="1.05" transform="rotate(-135.74 12.531 13.914)" fill="currentColor" fillOpacity=".7" />
                                </svg>
                            </button>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-[#6f6257]">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border border-[#d8c7b5] px-4 py-3 outline-none transition focus:border-[#b98a5a]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-[#6f6257]">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-[#d8c7b5] px-4 py-3 outline-none transition focus:border-[#b98a5a]"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-[#6f6257]">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full border border-[#d8c7b5] px-4 py-3 outline-none transition focus:border-[#b98a5a]"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-[#6f6257]">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full border border-[#d8c7b5] px-4 py-3 outline-none transition focus:border-[#b98a5a]"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-[#6f6257]">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="6"
                                className="w-full border border-[#d8c7b5] px-4 py-3 outline-none transition focus:border-[#b98a5a]"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#211c18] py-3 text-sm font-bold uppercase tracking-[0.22em] text-white transition hover:bg-[#b98a5a]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="mx-auto mt-12 max-w-7xl">
                    <h2 className="mb-6 text-3xl font-semibold text-[#211c18]">Find Us</h2>
                    <div className="flex h-80 items-center justify-center bg-[#d8c7b5]">
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6f6257]">Map Integration Coming Soon</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
