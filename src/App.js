import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Turma from "./components/pages/Turma";
import Professor from "./components/pages/Professor";
import Disciplina from "./components/pages/Disciplina";
import Boletim from "./components/pages/Boletim";
import React from "react";
import Aluno from "./components/pages/Aluno";
import Container from "./layout/Container";
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import Projects from "./components/pages/Projects";

function App() {
    return (
        <Router>
            <Navbar />
            <Container customClass="min-height">
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/projects" element={<Projects/>}></Route>
                    <Route path="/aluno" element={<Aluno/>}></Route>
                    <Route path="/boletim" element={<Boletim/>}></Route>
                    <Route path="/disciplina" element={<Disciplina/>}></Route>
                    <Route path="/professor" element={<Professor/>}></Route>
                    <Route path="/turma" element={<Turma/>}></Route>
                </Routes>
            </Container>
                <Footer />
        </Router>

    )
}

export default App;
