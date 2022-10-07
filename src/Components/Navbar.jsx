import HeadImage from "../Images/puplip.png"

const Navbar = () => {
    return (
        <nav className="container flex items-center py-7 mt-4 sm:mt-12 m-auto">
            <div className="py-1"><img src={HeadImage} width="64" height="64" className="rounded-full" alt="" />
            </div>
            <div>
                <h1 className="py-1 px-5 font-bold text-xl text-sky-500">Zsolt Berecz </h1>
                <h1 className="py-1 px-5 font-bold text-xl text-sky-200">@bzsol</h1>
            </div>
            <div
                className="hidden md:flex flex-1 justify-end items-center gap-12 text-sky-500 uppercase font-semibold">
                <a href="/" className="hover:text-sky-300">About me</a>
                <a href="/" className="hover:text-sky-300">Skills</a>
                <a href="/" className="hover:text-sky-300">References</a>
                <a href="/" className="hover:text-sky-300">Contacts</a>
            </div>
            <div class="flex md:hidden flex-1 justify-end mx-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
        </nav>
    );
}


export default Navbar;