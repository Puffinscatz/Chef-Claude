import claude from "../assets/chef-claude-icon.png"

export default function Header () {
    return (
        <header>
            <img src={claude} className="Claude" />
            <h1>Chef Claude</h1>
        </header>
    )
}