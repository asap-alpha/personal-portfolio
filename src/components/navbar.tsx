import Link from 'next/link';

function Navbar(){
    return (
        <div className="fixed w-full h-[7vh] nav-container">
        <nav className="flex justify-between items-center max-w-3xl mx-auto h-full px-6 py-3">
          <div>asap-alpha</div>
          <div className="text-neutral-500">
            <div className="flex items-center gap-3">
              <Link href={`https://github.com/asap-alpha`} target="_blank">
                <p className="text-sm hover:text-black ease-in duration-200">
                  projects
                </p>
              </Link>
              {/* <Link href={`/blog`}>
                <p className="text-sm hover:text-black ease-in duration-200">
                  posts
                </p>
              </Link> */}
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;