import "./App.css";
// import MyPhotoComponent from "./MyPhotoComponent.js";
// import selfimage from "./assets/photo.jpeg";
import ContentComponent from "./ContentComponent";
import ContactComponent from "./ContactComponent";

function App() {
  return (
    <div className="App">
      {/* <MyPhotoComponent photo={selfimage} /> */}
      <h1>Georgiana Ang</h1>
      <ContentComponent
        title="About Me"
        content="I am currently taking a course under NTU's SCTP programme, to learn Software Engineering."
      />
      <ContactComponent
        email="xxx@gmail.com"
        linktext="GitHub"
        url="github.com/georgie-alx"
      />
    </div>
  );
}

export default App;
