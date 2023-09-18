import { Box, Spinner, Center } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Suspense, useEffect, lazy } from "react";

const AboutPage = lazy(() => import('./components/about/aboutUs/App'));
const MainPage = lazy(() => import('./components/Main/App'));
const ContactPage = lazy(() => import('./components/about/contact/App.jsx'));
const GlossaryPage = lazy(() => import('./components/Resources/glossary/App'));
const FAQPage = lazy(() => import('./components/Resources/FAQ/App'));

const DocPage = lazy(() => import('./components/Resources/documents/App'));
const MortgagePage = lazy(() => import('./components/Mortgages/App'));
// const ApplicationPage = lazy(() => import('./components/application/App'));
const SignInPage = lazy(() => import('./components/auth/signin/App'));
// const SignUpPage = lazy(() => import('./components/auth/SignUp'));
const ApplicationPage = lazy(() => import('./components/application/App'));
const SignUpPage = lazy(() => import('./components/auth/signup/App'));
const AdminSignInPage = lazy(() => import('./components/auth/adminLogin/App'));

// scroll to hash
function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }, [hash]);
}

function LoadableComponent(Component) {
  return (
    <Suspense fallback={<Center><Spinner /></Center>}>
      <Component />
    </Suspense>
  )
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Box>
        <Routes>
          <Route path="/" element={LoadableComponent(MainPage)} />
          <Route path="/contact-page" element={LoadableComponent(ContactPage)} />
          <Route path="/glossary-page" element={LoadableComponent(GlossaryPage)} />
          <Route path="/faq-page" element={LoadableComponent(FAQPage)} />
          <Route path="/sign-in" element={LoadableComponent(SignInPage)} />
          <Route path="/sign-up" element={LoadableComponent(SignUpPage)} />
          <Route path="/doc-page" element={LoadableComponent(DocPage)} />
          <Route path="/Mortgages/*" element={LoadableComponent(MortgagePage)} />
          <Route path="/application-page" element={LoadableComponent(ApplicationPage)} />
          <Route path="/about-page" element={LoadableComponent(AboutPage)} />
          <Route path="/admin-signin" element={LoadableComponent(AdminSignInPage)} />
        </Routes>
      </Box>
    </Router>
  );
}

function ScrollToHash() {
  useScrollToHash();
  return null;
}

export default App;