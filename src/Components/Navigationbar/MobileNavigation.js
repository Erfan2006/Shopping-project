import NavLinks  from "./NavLinks";
import {CgMenuLeft} from "react-icons/cg"
import {CgCloseO} from "react-icons/cg"
import { useState } from "react";

const MobileNavigation = () => {

    const [open , setOpen ] = useState(false);

    const hamburgerIcone = <CgMenuLeft className="Hamburger" size="50px" color="white" onClick={() => setOpen(!open)} />;
    const closeIcone = <CgCloseO className="Hamburger" size="50px" color="white" onClick={() => setOpen(!open)} />;

    const CloseMobileMenu = () => setOpen(false);

    return ( 


        <nav className="MobileNavigation">
            {open ? closeIcone : hamburgerIcone}
            {open && <NavLinks isMobile={true} CloseMobileMenu={CloseMobileMenu} />}
            {open ? closeIcone : hamburgerIcone}
            
        </nav> 
    );
}
 
export default MobileNavigation;