import { NavLink, Outlet } from "react-router";
import { HomeNavbar } from "../components/navbar.jsx"
import {useState, useEffect} from "react"
import { getCategoriesList } from "../controller/rootLayoutController.js"
import CategoryList from "../components/category.jsx"

export default function RootLayout() {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategoriesList().then((data) => setCategories(data));
    }, [])

    //search override category
    useEffect(() => {
        setCategory("")
    }, [search])

    //category override search
    useEffect(() => {
        setSearch("")
    }, [category])

    return (
        <div className="min-h-screen flex flex-col">

             <HomeNavbar search={search} setSearch={setSearch} categories={categories}
                category={category} setCategory={setCategory}/>

            <main className="flex-1 px-6 py-8">
                <Outlet context={{ search, category }}/>
            </main>
        </div>
    );
}
