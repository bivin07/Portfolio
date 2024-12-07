
import styles from  './App.module.css'
import { About } from './component/About/About';
import { Contact } from './component/Contact/Contact';
import { Experience } from './component/Experience/Experience';
import { Hero } from './component/Hero/Hero';

import { Navbar } from './component/Navbar/Navbar';
import { Projects } from './component/Projects/Projects';


function App() {
 

  return(

 <div className={styles.App}>
<Navbar/>

<Hero/>



<About/>

<Experience/>

<Projects/>

<Contact/>
 </div>

  );
}

export default App
