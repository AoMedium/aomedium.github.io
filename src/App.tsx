import './App.css'

export const PAGES = ["gravity", "scales", "web-instrument", "keyboard-stats"];

export default function App() {
  return (
    <>
      <img id="avatar" src="https://avatars.githubusercontent.com/u/75078332?v=4"></img>
      <div id="titleCard">
        <h1>AoMedium</h1>
        <p>Software Engineer</p>
      </div>
      <br></br>
      <a href="https://github.com/AoMedium">https://github.com/AoMedium</a>
      
      <h2>Projects</h2>
      <ul>
        {PAGES.map(page => {
          return <li key={page}>
            <a href={page}>{page}</a>
          </li>
        })}
      </ul>
    </>
  )
}