import React from "react";

export default function Main(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1 className="heading-1">Fun Facts About React</h1>
            <ul className="unordered-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke </li>
                <li>Has well over 100k stars on Github</li>
                <li>It is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>


            </ul>
        </main>
    )
}