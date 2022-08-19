import './App.css';
import jhon from "./img/John-Doe.jpg"
import proj from "./img/proj1(1).jpg"
import proj2 from "./img/proj2.jpg"
import proj3 from "./img/proj3.jpg"
import proj4 from "./img/proj4.jpg"

import ('https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe&display=swap');
function App() {
  return (
   
  <div>
    <header>
      <h1>John Doe</h1>
      <ul class="navmenu">
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </header>
    <section id="about-me">
      <h1>
        Hello, my name is
        <span class="rotate text-important">John doe</span>,<br />
        and i make horrible websites.
      </h1>
      <img class="avatar" src={jhon} alt="jhon-doe" />
    </section>
    <section id="projects">
      <h2 class="text-important">Projects</h2>
      <div class="projects-container">
     
        <div class="project-card">
          <img src={proj} alt="project" />
          <h3>Project 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>
        
        <div class="project-card">
          <img src={proj2} alt="project" />
          <h3>Project 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>
        
        <div class="project-card">
          <img src={proj3} alt="project" />
          <h3>Project 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>
        <div class="project-card">
          <img src={proj4} alt="project" />
          <h3>Project 4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>
      </div>
    </section>
    <section id="contact">
      <h2 class="text-important">contact me</h2>
      <form>
        <label>Full Name</label>
        <input type="text" placeholder="Email" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Message</label>
        <textarea rows="5" cols="40"></textarea>
        <button>Send</button>
      </form>
    </section>
    <footer>
      <p>Copyritghts &copy; GOMYCODE 2020</p>
    </footer>
  </div>

    
  );
}

export default App;
