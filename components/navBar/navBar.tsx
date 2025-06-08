"use client"
import Link from "next/link";

export const NavBar = () => {
    return (
        <header className="border-b sticky top-0 z-20 bg-white">
            <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
                <Link href="/" className="flex items-center no-underline">
            <span className="inline-block mr-2">
              <svg width={28} height={28} viewBox="0 0 32 32"><path fill="#4B2996" d="M16 3.5c3.6-3.1 8.5-2.4 11.3.6 2.4 2.6 2.1 8.2.5 11.8-1.7 4-5.8 7-11.8 7s-10.1-3-11.8-7c-1.6-3.6-1.9-9.2.5-11.8C7.5 1.1 12.4.4 16 3.5z"/><circle cx="10.5" cy="13" r="2.5" fill="#4B2996"/><circle cx="21.5" cy="13" r="2.5" fill="#4B2996"/></svg>
            </span>
                    <span className="text-xl font-extrabold tracking-tight pt-1 text-palette-primary font-primary">Doggy Stickers</span>
                </Link>
                <button
                    aria-label="cart"
                    className="relative"
                    onClick={() => console.log("click")}
                >
                    <svg width={28} height={28} viewBox="0 0 24 24"><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.16 15c.41.83 1.25 1.41 2.21 1.41h5.25c.96 0 1.8-.58 2.21-1.41l2.14-6.09a1 1 0 00-.95-1.34H6.06L5.21 4.41A1 1 0 004.25 3.5h-2a1 1 0 100 2h1.11l2.89 10.21a1 1 0 00.91.79h10.16a1 1 0 000-2H7.42l-.26-.79z" fill="#4B2996"/></svg>
                </button>
            </div>
        </header>
    )
}

export default NavBar;