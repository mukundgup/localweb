import React, { useState, useEffect } from "react";
import Card from "./cards ";

function Home() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("items"));
        if (storedItems) {
            setItems(storedItems);
        }
    }, []);

    const handleshowItem = () => {
        if (inputValue.trim()) {
            const updatedItems = [...items, inputValue];
            setItems(updatedItems);
            localStorage.setItem("items", JSON.stringify(updatedItems));
            setInputValue(""); // Clear the input field
        }
    };

    return (
       <> <Card/>
        <div>
            <h1>Hello</h1>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add an item"
                />
                <button onClick={handleshowItem}>show</button>
            </div>
           
        </div>
        </>
    );
}

export default Home;
