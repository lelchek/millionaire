import React from 'react';
import { Switch, Route } from "react-router-dom";
import { TotalScoreProvider } from './context/TotalScore'
import DefaultPage from './pages/DefaultPage'
import GamePage from './pages/GamePage'
import StartPage from './pages/StartPage'
import WinnerPage from './pages/WinnerPage'
import './App.css';

export default function App() {
  return (
    <TotalScoreProvider>
      <Switch>
        <Route path="/" exact component={StartPage} />
        <Route path="/start" component={StartPage} />
        <Route path="/game" component={GamePage} />
        <Route path="/win" component={WinnerPage} />
        <Route component={DefaultPage} />
      </Switch>
    </TotalScoreProvider>
  );
}
