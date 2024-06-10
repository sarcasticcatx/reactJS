import "./Header.css"

interface HeaderProp {
    title: string;
}

function Header({title}: HeaderProp) {
    return (
        <header className="Header">
            <h1>{title}</h1>
        </header>
    )
}

export default Header;
