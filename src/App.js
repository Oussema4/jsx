
import './Style.css';
import photo from "./qf.jpg"
function App() {
  return (
    <div className="App">
      
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 class="titlered">Your name here</h1>
<br/>
<img src="/ww.jpg" alt="w" />
<br/>
<img src={photo} alt="q"/>
</div>
<video width="320" height="240" controls>
<source src="dz.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
