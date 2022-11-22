import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes"

// function createNote(entry){
//     return(
//         <Note 
//             key = {entry.id}
//             title = {entry.title}
//             content = {entry.content}
//         />
//     )
// }
// alternative way of writing it

function App(){
    return(
        <div>
            <Header />
            {/* alternative call of function */}
            {/* notes.map(createNote) */}
            {notes.map(entry => (
            <Note 
                key = {entry.id}
                title = {entry.title}
                content = {entry.content}
            />
            )
            )}
            <Footer />
        </div>
    );

}

export default App;