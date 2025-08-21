import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
                <Route path="blog" element={<Blog />} />
            </Route>
        </Routes>
    );
};

export default App;
