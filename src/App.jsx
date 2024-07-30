import "./App.css";
import CardCollection from "./CardCollection";
import Footer from "./Footer";
import HeaderImage from "./HeaderImage";
import Navbar from "./Navbar";
import EmailForm from "./EmailForm";

function App() {
  const articles = [
    {
      image: "https://picsum.photos/300/200",
      title: "Article 1",
      description: "This is the description for article 1.",
      rating: 4,
      name: "John",
    },
    {
      image: "https://picsum.photos/300/200",
      title: "Article 2",
      description: "This is the description for article 2.",
      rating: 4,
      name: "Jane",
    },
    {
      image: "https://picsum.photos/300/200",
      title: "Article 3",
      description: "This is the description for article 3.",
      rating: 5,
      name: "Alice",
    },
  ];

  const tutorials = [
    {
      image: "https://picsum.photos/300/200",
      title: "Tutorial 1",
      description: "This is the description for tutorial 1.",
      rating: 2,
      name: "Joe",
    },
    {
      image: "https://picsum.photos/300/200",
      title: "Tutorial 2",
      description: "This is the description for tutorial 2.",
      rating: 5,
      name: "Smith",
    },
    {
      image: "https://picsum.photos/300/200",
      title: "Tutorial 3",
      description: "This is the description for tutorial 3.",
      rating: 3,
      name: "Josh",
    },
  ];

  return (
    <>
      <Navbar />
      <HeaderImage />
      <CardCollection
        collectionName="Articles"
        permalink="#"
        cards={articles}
      />
      <CardCollection
        collectionName="Tutorials"
        permalink="#"
        cards={tutorials}
      />
      <EmailForm />
      <Footer />
    </>
  );
}

export default App;
