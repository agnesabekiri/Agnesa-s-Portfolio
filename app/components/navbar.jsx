import React from "react";
import Link from "next/link";

function Navbar() {
    return(
        <div style={{display:"flex",justifyContent:"center",gap:"50px", padding:"20px"}}>
            <Link href="/">
            <button>Home</button>
            </Link>
            
            <Link href="/about">
                <button>About Me</button>
            </Link>
            <Link href="/experience">
                 <button>Experience</button>
            </Link>

            <Link href="/projects">
                <button>Projects</button>
            </Link>
        </div>
    );
}
export default Navbar;