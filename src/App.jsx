import { useState } from "react";
import NavBar from "./Components/NavBar";
import HeroCom from "./Components/HeroCom";
import IconsBar from "./Components/IconsBar";
import CardCom from "./Components/CardCom";
import FristPicture from "./assets/pic1.png";
import SecondPicture from "./assets/pic2.png";
import thirdPicture from "./assets/pic3.png";
import authorAvatar from "./assets/personal.png";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <NavBar />
      <HeroCom />
      <IconsBar />
      <div className="cards-container">
        <CardCom
          previewImage={FristPicture}
          authorName="Jenny Molla"
          authorAvatar={authorAvatar}
          codeCount="25"
          downloadCount="25"
        />
          <CardCom
          previewImage={SecondPicture}
          authorName="Jenny Molla"
          authorAvatar={authorAvatar}
          codeCount="25"
          downloadCount="25"
        />
          <CardCom
          previewImage={thirdPicture}
          authorName="Jenny Molla"
          authorAvatar={authorAvatar}
          codeCount="25"
          downloadCount="25"
        />
      </div>
    </div>
  );
}

export default App;
