import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Turma from "./components/pages/Turma";
import Professor from "./components/pages/Professor";
import Disciplina from "./components/pages/Disciplina";
import Boletim from "./components/pages/Boletim";
import React from "react";
import Aluno from "./components/pages/Aluno";
import Container from "./layout/Container";

function App() {
    return (
        <Router>
            <Link to="/">Home</Link>
            <Link to="/aluno">Aluno</Link>
            <Link to="/boletim">Boletim</Link>
            <Link to="/disciplina">Disciplina</Link>
            <Link to="/professor">Professor</Link>
            <Link to="/turma">Turma</Link>

            <Container customClass="min-height">
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/aluno" element={<Aluno/>}></Route>
                    <Route path="/boletim" element={<Boletim/>}></Route>
                    <Route path="/disciplina" element={<Disciplina/>}></Route>
                    <Route path="/professor" element={<Professor/>}></Route>
                    <Route path="/turma" element={<Turma/>}></Route>
                </Routes>
            </Container>
                <p>Footer</p>
        </Router>

    )
}

export default App;
