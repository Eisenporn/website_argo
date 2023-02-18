import logo from "../../../assets/logo.svg";

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <div>
                <ul>
                    <li><a href="">меню</a></li>
                    <li><a href="">животные</a></li>
                    <li><a href="">сумки</a></li>
                    <li><a href="">женщины</a></li>
                    <li><a href="">дети</a></li>
                    <li><a href="">мужчины</a></li>
                    <li><a href="">украшения и часы</a></li>
                    <li><a href="">корзина</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;