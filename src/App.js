import './App.css';
import { Footer } from './Footer';
import { PageNavbar } from './components/Navbar';
import { PageBackground } from './components/PageBackground';
import { Algorithms } from './sections/Algorithms';
import { Lectures } from './sections/Lectures';
import { Assignments } from './sections/Assignments';
import { Hours } from './sections/Hours';
import { Staff } from './sections/Staff';
import { Resources } from './sections/Resources';

function App() {
  return <>
    <PageNavbar />
    <PageBackground />
    <Algorithms />
    <Lectures />
    <Assignments />
    <Hours />
    <Staff />
    <Resources />
    <Footer />
  </>;
}

export default App;
