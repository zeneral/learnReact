import {NavLink} from "react-router";
import {useState} from "react"
import CategoryList from "./category.jsx"

function Search({search, setSearch}){
    return (
        <div >
            <input type="text" name="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)}
            className = "
                flex-initial
                md:p-2
                p-1
                max-w-100
                bg-blue-50
                text-mist-900
                rounded-sm
            "/>
        </div>
    )
}

export function Navbar(){
    const[menu, setMenu] = useState(false);
    return( 
        <>
            <nav>
                <div className="hidden md:flex gap-6 mr-5">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-blue-400" : "hover:text-black-300"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/order"
                        className={({ isActive }) =>
                            isActive ? "text-blue-400" : "hover:text-black-300"
                        }
                    >
                       Order 
                    </NavLink>
                </div>
                <div className="md:hidden float:right overflow-hidden">
                    <button className="text-16px border-none outline-none p-4" onClick={() => {setMenu(!menu)}}>
                        Menu
                    </button>
                {menu && ( 
                    <div className="block absolute z-1 bg-slate-200">
                        <NavLink to="/" className="float:none p-4 decoration-none block" 
                                onClick={() => {setMenu(!menu)}}>Home</NavLink>
                        <NavLink to="/order" className="float:none p-4 decoration-none block" 
                                onClick={() => {setMenu(!menu)}}>Order</NavLink>
                    </div>
                )}
                </div>
                
            </nav>
        </>
    )
}

export function HomeNavbar({search, setSearch, categories, category, setCategory}){
    return(
            <>
            <div className="flex flex-row justify-between items-center">
                    <h3 className="p-1 bg-slate-400 rounded-sm text-x1">Pasal</h3>
                 <Search search={search} setSearch={setSearch}/>
                 <Navbar />
             </div> 
            <br/>
            <CategoryList categories={categories} category={category} setCategory={setCategory}/> 
            </>
    )
}
