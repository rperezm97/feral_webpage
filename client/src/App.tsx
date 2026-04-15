/* ============================================================
   FERAL AWARENESS - App.tsx (Main Router)
   ============================================================
   EDIT GUIDE:
   - To add a new page: 1) Create component in /pages, 2) Import here, 3) Add Route
   - To change navigation order: Edit the NavBar component in /components/NavBar.tsx
   - Theme is set to "dark" by default (matches the radical aesthetic)
   ============================================================ */

import { useEffect } from "react";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Tantra from "./pages/Tantra";
import Practice from "./pages/Practice";
import About from "./pages/About";
import School from "./pages/School";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Impressum from "./pages/Impressum";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ConsciousnessTest from "./pages/ConsciousnessTest";
import BlogPostYogaYouWereSold from "./pages/BlogPostYogaYouWereSold";
import Freebie from "./pages/Freebie";

/* Scroll to top when the route changes (SPA fix) */
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      {/* EDIT: Add or remove routes here */}
      <Route path={"/"} component={Home} />
      <Route path={"/tantra"} component={Tantra} />
      <Route path={"/practice"} component={Practice} />
      <Route path={"/about"} component={About} />
      <Route path={"/school"} component={School} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/impressum"} component={Impressum} />
      <Route path={"/privacy"} component={PrivacyPolicy} />
      <Route path={"/test"} component={ConsciousnessTest} />
      <Route path={"/blog/the-yoga-you-were-sold"} component={BlogPostYogaYouWereSold} />
      <Route path={"/freebie/:slug"} component={Freebie} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <ScrollToTop />
        <NavBar />
        <Router />
        <Footer />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
