const Navigation = () =>{
    return (
        <nav>
        <div className="container">
           <img style = {{height : 100, width : 600}}src="/images/brand-logo.png" alt=""></img>
        </div>

        <ul>
          <li href="#"> Menu </li>
          <li href="#"> Location </li>
          <li href="#"> About </li>
          <li href="#"> Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    );
}

export default Navigation;