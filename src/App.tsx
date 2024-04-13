import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  const menu = ["About", "Contact"];
  const fontColors = ["blue", "yellow", "pink", "green"];
  const random = Math.floor(Math.random() * fontColors.length);
  const secondaryColor = random == 0 ? fontColors[3] : fontColors[random - 1];

  return (
    <div className={"selection:bg-" + secondaryColor}>
      <style></style>
      <Header
        heading={"Express yourself. " + secondaryColor }
        items={menu}
        accentColor={fontColors[random]}
      />
      <Hero accentColor={fontColors[random]} />
    </div>
  );
}

export default App;
