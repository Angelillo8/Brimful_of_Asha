import { Link } from "react-router-dom";


const HomeInfo = () => {
    return (
      <article>
        <header>
          <h1 className="main-home-heading">WELCOME TO PLANET EXPLORER</h1>
        </header>
        
        <section>
          <h2 className="home-headings">How to use our application:</h2>
          <p>
            Our application is designed to help you explore and learn about different planets in our solar system.
          </p>
          <ol>
            <li>Visit the <Link to="/planets" className="btns-small">PLANETS</Link> page to learn about the planets in our solar system.</li>
            <li>Visit the <Link to="/selector" className="btns-small">FIND A PLANET</Link> page to interact with the information on planets.</li>
          </ol>
        </section>
              
        <section>
          <h2 className="home-headings">The pages you can visit:</h2>
          <p>
            Our application consists of the following pages:
          </p>
          <ul>
            <li><Link to="/" className="btns-small">HOME:</Link> This is the page you're currently on, which provides an overview of our application.</li>
            <li><Link to="/planets" className="btns-small">PLANETS:</Link> You will find a list of the planets in our solar system. When you select a planet, you'll be taken to the planet's page where you can view detailed information about that selected planet.</li>
            <li><Link to="/selector" className="btns-small">FIND A PLANET:</Link> Answer some questions regarding color, rings, temperature, and moons to see the planets applicable, according to the answers.</li>
          </ul>
        </section>
  
        <section>
          <h2 className="home-headings">Why did we create this App?</h2>
          <p>
            We developed this application with the goal of making it fun and educational for users to explore and learn about
            planets. By providing a user-friendly interface and detailed information about each planet, we aim to spark
            curiosity and promote a better understanding of our solar system.
          </p>
        </section>

        <section>
          <h2 className="home-headings">Reviews</h2>
          <p>"This is good, I give it 7/10." - Peter Bartram, 14 years old</p>
          <p>"A great idea that is even better in practice" - Jaydee Bartram, 12 years old</p>
        </section>
      </article>
    );
  };
  
  export default HomeInfo;
  