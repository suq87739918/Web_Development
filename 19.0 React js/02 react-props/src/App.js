import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import PracticeApp from "./components/PracticeApp";
import Avatar from "./components/Avatar";
import contacts from "./contacts";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    //Card()在这里的properties都是可以自定义的，使得Card()这个组件可以被重复调用
    <div className="App">
      <h1 className="heading">My Contacts</h1>

      {/* Mapping Data to Components, map() function will loop through the contacts and pass to createName */}
      {contacts.map(createCard)}

      {/* <Avatar img="https://miro.medium.com/v2/resize:fit:720/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png" />
      <PracticeApp
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+123 456 789"
        email="b@beyonce.com"
      />
      <PracticeApp
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        tel="+987 654 321"
        email="jack@nowhere.com"
      />
      <PracticeApp
        name="Chuck Norris"
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        tel="+918 372 574"
        email="gmail@chucknorris.com"
      /> */}

      {/* <Card
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        tel="+987 654 321"
        email="jack@nowhere.com"
      />
      <Card
        name="Chuck Norris"
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        tel="+918 372 574"
        email="gmail@chucknorris.com"
      /> */}
    </div>
  );
}

export default App;
