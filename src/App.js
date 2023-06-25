import {useEffect, useState } from 'react'  // reactライブラリ使用宣言
import logo from './logo.svg';
import './App.css';

const url = 'https://weys9m11gc.execute-api.ap-northeast-1.amazonaws.com/Prod/hello'

function App() {
  const [messege, setMessage] = useState('loading...')
  console.log(messege)

  useEffect(() => {
    fetch(url)                  // APIコール関数
      .then(async value => {          // JavaScriptの非同期の処理
        const json = await value.json()
        setMessage(json.message)
      })
      .catch(reason => {
        console.error(reason)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {messege}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Hello World
        </a>
      </header>
    </div>
  );
}

export default App;
