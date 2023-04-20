import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import PokemonPage from "./pages/PokemonPage";
import TodosPage from "./pages/TodosPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemons" element={<PokemonPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="*" element={<Navigate replace to="/pokemons" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
