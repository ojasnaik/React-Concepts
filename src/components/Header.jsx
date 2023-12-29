import reactImg from "../assets/react-core-concepts.png";

export default function Header() {
  const words = ["Fundamental", "Core", "Crucial"];
  const getRandom = (max) => Math.floor(Math.random() * (max + 1));
  const randomWord = words[getRandom(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomWord} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
