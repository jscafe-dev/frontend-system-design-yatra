import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
// import { About, Contact, FAQs, Profile, Login } from "./pages";

const Profile = lazy(() => import("./pages/Profile"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQs = lazy(() => import("./pages/FAQs"));
const Login = lazy(() => import("./pages/Login"));

const isAuthenticated = true;
export const PrivateRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="profile"
          element={
            <Suspense fallback={<>...</>}>
              {" "}
              <Profile />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<>...</>}>
              {" "}
              <About />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<>...</>}>
              {" "}
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="faqs"
          element={
            <Suspense fallback={<>...</>}>
              {" "}
              <FAQs />
            </Suspense>
          }
        />

        <Route path="/*" element={<Navigate to="/profile" replace />} />
      </Routes>
    </>
  );
};

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <Suspense fallback={<>...</>}>
            {" "}
            <Login />
          </Suspense>
        }
      />

      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route path="/*" element={<PrivateRoutes />} />
        ) : (
          <Route path="/*" element={<PublicRoutes />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
