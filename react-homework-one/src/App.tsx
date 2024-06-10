import "./App.css"
import ListPage from "./Components/ListPage/ListPage";
import Footer from "./layout/Header/Footer/Footer";
import Header from './layout/Header/Header'



function PackMate() {
const appTitle = "Pack Mate: Your travel companion 🧳"

return (
  <div className="App-PackMate">
    <Header title={appTitle}></Header>
    <main>
<ListPage />
    </main>
    <Footer />
  </div>
)
}

export default PackMate;