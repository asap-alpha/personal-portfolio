import { github, medium_blog_link, medium_link } from '@/data/constant_Json';
import Link from 'next/link';

function Navbar(){
    return (
        <div className="fixed w-full h-[7vh] nav-container bg-gray-700">
        <nav className="flex justify-between items-center max-w-3xl mx-auto h-full px-6 py-3 text-white">
          <div>asap-alpha</div>
          <div className="text-neutral-255">
            <div className="flex items-center gap-3">
              <Link href={github} target="_blank">
                <p className="text-sm hover:text-blue-100 ease-in duration-200">
                  projects
                </p>
              </Link>
              <Link href={medium_blog_link} target="_blank">
                <p className="text-sm hover:text-blue-100 ease-in duration-200">
                  posts
                </p>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;