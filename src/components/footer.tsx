function Footer(){
    return( 
     <footer className="flex justify-between items-center max-w-3xl mx-auto h-full px-6 py-5">
        <p>        
        © {new Date().getFullYear()} Mustapha Abdallah. All rights reserved.
        </p>
       </footer>
    );
}
export default Footer;