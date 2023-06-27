
import styled from "styled-components";
import bg from './img/bg1.png'
import { MainLayout, InnerLayout } from "./styles/Layouts";
import Orb from './Components/Orb/Orb';
import Navigation from "./Navigation/Navigation";
import { useState, useMemo } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Incomes/Incomes";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active, setActive] = useState(1)
  // on click on menu Item switching the Dashboard
  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
    }
  }



  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])
  return (
    <AppStyled bg={bg} className='App'>
      {orbMemo}
      <Orb />
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
height: 100vh;
background-image: url(${props => props.bg});
position: relative;
object-fit: cover;
main{
  flex: 1;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  overflow-x: hidden;
  &::-webkit-scrollbar{
    width: 0;
  }
}
`



export default App;
