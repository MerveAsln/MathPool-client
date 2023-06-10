import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import MathComponent from "./views/Math";
import GeoComponent from "./views/Geo";
import Profile from "./views/Profile";
import ArticleApi from "./views/Article";
import { QuizComponent } from "./views/QuizPage";
import QuestionsComponent from "./views/Questions";
import AskQuestionComponent from "./views/AskQuestion";
import AllQuestionsComponent from "./views/AllQuestions";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import About from "./views/About";


// styles 
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="container-fluid d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
          <Route path="/home" component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/article-api" component={ArticleApi} />
            <Route path="/all-questions" component={QuestionsComponent} />
            <Route path="/math" component={MathComponent} />
            <Route path="/geometry" component={GeoComponent} />
            <Route path="/ask-question" component={AskQuestionComponent} />
            <Route path="/all-questions" component={AllQuestionsComponent} />
            <Route path="/quiz" component={QuizComponent} />



         

            

          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
