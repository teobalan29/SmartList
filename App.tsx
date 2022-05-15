import {Navigation} from "./src/navigation/Navigation"
import AuthProvider from "./src/context/AuthContext/AuthProvider";
import 'react-native-gesture-handler';


export default function App() {
  return (
    <AuthProvider>
      <Navigation/>
    </AuthProvider>
  );
}
