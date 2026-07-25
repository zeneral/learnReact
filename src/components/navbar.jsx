import {NavLink} from "react-router";
import {useState} from "react"
import CategoryList from "./category.jsx"

function Search({search, setSearch}){
    return (
        <div >
            <input type="text" name="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)}
            className = "
                p-2
                w-50
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
                <div className="hidden md:flex gap-6">
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
                <div>
                    <button
                    className="text-center right-1 md:hidden focus:bg-slate-400 p-2 border rounded-sm"
                    onClick={() => setMenu((prev) => !prev)}
                    aria-label="Toggle menu"
                    >
                        Menu
                    </button>
                    {menu && (
                        <div className="flex flex-col gap-4 mt-4 absolute bg-slate-400 p-4 right-1 top-0
                            rounded-sm">
                           <NavLink to="/" onClick={() => setMenu((prev) => !prev)}>
                           Home
                           </NavLink>
                            <NavLink to="order" onClick={() => setMenu((prev) => !prev)}>
                            Order
                           </NavLink>
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
            <nav className="md:flex items-center justify-between px-6 md:py-4 bg-slate-200 text-gray-900">
                <img className="top-0 h-20 w-50" src="/pasal_logo.svg" alt=""/>
                <div className="flex gap-6 text-align-center justify-center">
                    <Search search={search} setSearch={setSearch}/>
                    <Navbar /> 
                </div>
            </nav>
            <CategoryList categories={categories} category={category} setCategory={setCategory}/> 
            </>
    )
}
