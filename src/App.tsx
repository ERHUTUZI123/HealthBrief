import AuthLayout from "./_auth/AuthLayout";
import SignupForm from "./_auth/forms/SignupForm";


// @ts-ignore
import "./global.css";
import { Routes, Route } from "react-router-dom";
import JokeGenerator from "./Joke";

const App = () => {
  return (
    <main className="flex h-screen">
    <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-up" element={<SignupForm />} />

        </Route>
        <Route>
          <Route path="/sign-in" element={<JokeGenerator />} />
        </Route>
    </Routes>
    </main>
  )
}

export default App