import { AvatarBlock } from "./components/avatar_block";
import { Information } from "./components/information";
import { MyProjects } from "./components/my_projects";
import {Header} from "./components/header"
import '../src/style/page.css';
import { FooterBlock } from "./components/footer";

function App() {
  return (<div>
    
      <div className="page">
          <Header/>
            <AvatarBlock />
            <Information />
      </div>
      <FooterBlock/>
    </div>);
}

export default App;



