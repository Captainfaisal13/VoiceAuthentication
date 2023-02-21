import voiceImage from "./images/voice5.jpg";
import CreateAccount from "./components/createAccount";
import Login from "./components/login";
import { AppContext } from "./context";
import { useContext } from "react";
import VoicePopup from "./components/voicePopup";

function App() {
  const { isNewUser, showPopup } = useContext(AppContext);
  return (
    <main className=" font-poppins">
      <div className="grid grid-flow-row gap-4 sm:gap-0 sm:grid-cols-2 h-screen">
        <div className="flex justify-center align-middle bg-[#030132] pb-2 sm:pb-0">
          <div className="m-auto">
            <img src={voiceImage} alt="" />
            <h1 className="text-white text-center text-md sm:text-3xl mt-3">
              <span className="text-[#F4098A]">Voice</span> Based Authentication
            </h1>
          </div>
        </div>
        {isNewUser ? <CreateAccount /> : <Login />}
      </div>
      {showPopup && <VoicePopup />}
    </main>
  );
}

export default App;
