import Navbar from "./components/navbar"
import Search from "./components/search"
import Product from "./components/product"
import About from "./components/about"
import Footer from "./components/footer"
function App()
{
    return(
       <div><Navbar></Navbar>
    <Search></Search>
    <Product></Product>
    <About> </About>
    <Footer></Footer>
    </div>
    )
}
export default App