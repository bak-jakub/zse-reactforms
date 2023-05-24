import React from 'react'
import logo from '../assets/ZSE-banner.png';
import '../App.css';
import tasks from '../assets/tasks.json';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useState, useEffect } from 'react';



export default function Main() {
 
function listTasks() {
    console.log(tasks);
    let lst = '';
    for (let [key, value] of Object.entries(tasks)) {
      lst += `<li><a href="${key}">${value}</a></li>`;
    }
    return lst;
  }
  return (
    <div className="App">
        <div className="App-header">
        <Header />
        <ol>
          { Object.keys(tasks).map( (key, value) => {
              return <li key = {key}><a href={'/form/' + String(key) + '/' + String(value)}>{tasks[key]}</a></li>
             })
          }
        </ol>
        <div className="links">
        <Link to="/help">Kliknij aby przejść do strony help</Link><br />
        <Link to="/form">Kliknij aby przejść do strony form</Link>
        </div>
        </div>
        <div>
      
    </div>
    </div>
  )
}
