import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import HomeCards from './components/JobListings';
import JobListings from './components/JobListings';

function App() {
  const name = 'Shitanshu';
  const x = 10;
  const y = 20;
  const names = ['Randiket', 'Vibs', 'Aryan', 'sita mayia', 'ram'];
  const loggedIn = false;


  
  return (
    <>
      {/* <h1 className="text-6xl">
        Hello {name}!
      </h1>
      <hr></hr>
      <p className='text-5xl'> The sum of {x} and {y} is {x + y}. </p>
      <hr></hr>
      <ul className='text-4xl'>
        {names.map((name, index) => (<li key={index}>{name}</li>))}
      </ul>
      {loggedIn ? <h1> hello member</h1> : <h1>hello guest</h1>} */}

        <Navbar/>
        <Hero/>
        <JobListings/>
    </>
  );
}

export default App;
