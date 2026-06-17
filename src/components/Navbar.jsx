import React from "react";
import logo from "../assets/logo3.png";
import search from "../assets/search-icon.png";
import menu from "../assets/menu.png";
import close from "../assets/close-icon.png"
import { useClerk, useUser, UserButton } from '@clerk/react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.861c.634-.498 1.28-.77 2.031-1.08a3 3 0 114.369 4.372c-.476.478-.964.872-1.464 1.166a9.026 9.026 0 01-2.4 1.2c-.94.3-1.913.455-2.879.455s-1.939-.152-2.879-.455a9.015 9.015 0 01-2.4-1.2c-.5-.294-.988-.688-1.464-1.166a3 3 0 114.369-4.372z" />
    </svg>
);

const ThemeIcon = ({ theme }) => (
    theme === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" />
        </svg>
    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25M12 18.75V21M4.72 4.72l1.59 1.59M17.69 17.69l1.59 1.59M3 12h2.25M18.75 12H21M4.72 19.28l1.59-1.59M17.69 6.31l1.59-1.59M15.75 12A3.75 3.75 0 1112 8.25 3.75 3.75 0 0115.75 12z" />
        </svg>
    )
)

const Navbar = ({ theme, toggleTheme }) => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Rooms & Suites', path: '/rooms' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
        { name: 'Dashboard', path: '/dashboard' },
    ];


    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { openSignIn } = useClerk();
    const { user } = useUser();
    const navigate = useNavigate();
    const location = useLocation();
    const isSolidNav = isScrolled || location.pathname !== "/";


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <nav className={`theme-navbar fixed left-0 top-0 z-50 flex w-full items-center justify-between px-4 transition-all duration-500 md:px-16 lg:px-24 xl:px-32 ${isSolidNav ? "bg-[#fffaf5]/90 py-3 text-[#211c18] shadow-md backdrop-blur-lg md:py-4" : "py-4 text-white md:py-6"}`}>

            <Link to="/" className="flex items-center gap-3">
                <img className="h-10 w-auto" src={logo} alt="Logo" />
                <span className="hidden text-sm font-bold uppercase tracking-[0.28em] sm:block">Verona</span>
            </Link>

            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <Link key={i} to={link.path} className={`group flex flex-col gap-0.5 text-xs font-bold uppercase tracking-[0.22em] ${isSolidNav ? "text-[#211c18]" : "text-white"}`}>
                        {link.name}
                        <div className={`${isSolidNav ? "bg-[#b98a5a]" : "bg-[#c49a6c]"} h-0.5 w-0 transition-all duration-300 group-hover:w-full`} />
                    </Link>
                ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
                <img src={search} alt="icon" className={`${isSolidNav ? "invert-0" : "invert"} h-6 transition-all duration-500`} />
                <button
                    type="button"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border transition ${isSolidNav ? 'border-[#d8c7b5] bg-white/70 text-[#211c18]' : 'border-white/40 bg-black/15 text-white backdrop-blur'} `}
                >
                    <ThemeIcon theme={theme} />
                </button>
                {user ? (
                    <UserButton>
                        <UserButton.MenuItem>
                            <UserButton.Action label="My Bookings" labelIcon={<BookIcon />}
                                onClick={() => navigate("/my-bookings")} />
                        </UserButton.MenuItem>
                    </UserButton>
                ) : (
                    <div className="rainbow ml-2">
                        <button onClick={() => openSignIn()} className="rounded-full bg-[#211c18]/90 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
                            Reservation
                        </button>
                    </div>
                )}
            </div>

            <div className="flex items-center gap-3 md:hidden">
                <button
                    type="button"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${isSolidNav ? 'border-[#d8c7b5] bg-white/70 text-[#211c18]' : 'border-white/40 bg-black/15 text-white backdrop-blur'} `}
                >
                    <ThemeIcon theme={theme} />
                </button>
                <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={menu} alt="" className={`${isSolidNav ? "" : "invert"} h-8`} />


            </div>

            <div className={`theme-navbar-overlay fixed left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-6 bg-[#fffaf5] text-base font-medium text-[#211c18] transition-all duration-500 md:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>

                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <img src={close} alt="close-menu" className="h-10" />
                </button>

                {navLinks.map((link, i) => (
                    <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-[0.22em]">
                        {link.name}
                    </Link>
                ))}

                {user &&
                    <button className="border border-[#d8c7b5] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-all" onClick={() => { navigate("/owner"); setIsMenuOpen(false); }}>
                        Dashboard
                    </button>
                }

                {user ? (
                    <UserButton>
                        <UserButton.MenuItem>
                            <UserButton.Action label="My Bookings" labelIcon={<BookIcon />}
                                onClick={() => navigate("/my-bookings")} />
                        </UserButton.MenuItem>
                    </UserButton>
                ) : (
                    <div className="rainbow">
                        <button onClick={() => openSignIn()} className="rounded-full bg-[#211c18]/90 px-8 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                            Reservation
                        </button>
                    </div>
                )}
            </div>
        </nav>

    );
}

export default Navbar
