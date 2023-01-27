import './main.css';
import GitHubCalendar from 'react-github-calendar'; 




export default function MainPage() {

    
    return (
        <>
        <img className="headshot" src="https://cdn.dashfight.com/99d742ace4a0519f1b8a8ebf97bbd4f93362bae1.jpg" />
        <div className="MainPage">
            <h1>Angel Puente</h1>
            <p className="blurb">Software Engineer with significant experience in the insurance and finance industry. Skilled in customer service, excelling through standardized work processes, and having an aptitude for learning new coding languages.</p>

            <div className="gitGraph">
            <GitHubCalendar
                blockRadius={7}
                color={"red"}
                theme={{
                    level0: "#480000",
                    level1: "#870000",
                    level2: "#af0d0d",
                    level3: "#cb2323 ",
                    level4: "#ff2d2d"}}
                username="tetonkaa">
            </GitHubCalendar>
            </div> 

        </div>
            <div className="svgDiv">
            <img className="languageSvg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <img className="languageSvg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            <img className="languageSvg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <img className="languageSvg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <img className="languageSvg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
            <img className="languageSvg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
            <img className="languageSvg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            <img className="languageSvg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
            <img className="languageSvg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
            <img className="languageSvg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" />
            <img className="languageSvg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
            <img className="languageSvg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
            <img className="languageSvg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            <img className="languageSvg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />                               
            </div>
    </>
    );

  }