import React, { useEffect, useState } from "react";

const JokeGenerator: React.FC = () => {
    const jokes = [
        "I have a joke about recursion, but I have a joke about recursion but I have a joke about recursion, but I have a joke about recursion, but I have a joke about recursion, but I have a joke about recursion, but I have a joke about recursion, but I …",
        "Mathematics is made of 50 percent formulas, 50 percent proofs, and 50 percent imagination.",
        "Why was the computer cold? It left its Windows open!",
        "There are 10 types of people: those who understand binary, and those who don’t.",
        "Why are Assembly programmers always sweating? They work below C-level!",
        "What’s the object-oriented way to become wealthy? Inheritance.",
        "Java and JavaScript are as similar as car and carpet.",
        "Algorithm: Word used by programmers when they don’t want to explain what they did.",
        "Why do JavaScript developers wear glasses? A: Because they can’t C#.",
        "Why is it so hard for a computer to hold a romantic relationship? A: They have too many compatibility issues.",
        "Debugging is like being a detective… Except the code confessed at the crime scene, but you still can’t figure out how it did it.",
        "Why did the programmer quit his job? He didn’t get arrays.",
        "What did the router say to the doctor? “It hurts when IP.”",
        "Did you hear about the mathematician who's afraid of negative numbers? He will stop at nothing to avoid them.",
        "Why did the software engineer go broke? Because he used up all his cache."
    ];

    const [joke, setJoke] = useState("Move your mouse to get a joke!");
    const [lastJokeTime, setLastJokeTime] = useState(0);
    const jokeInterval = 1500; // 1.5-second delay between jokes

    useEffect(() => {
        const handleMouseMove = () => {
            const currentTime = Date.now();
            if (currentTime - lastJokeTime > jokeInterval) {
                setJoke(getRandomJoke());
                setLastJokeTime(currentTime);
            }
        };
        
        window.addEventListener("mousemove", handleMouseMove);
        
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [lastJokeTime]);

    function getRandomJoke() {
        return jokes[Math.floor(Math.random() * jokes.length)];
    }

    return (
        <a 
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                textAlign: "center",
                maxWidth: "300px",
                fontSize: "1.2rem",
                color: "#333",
                padding: "20px",
                border: "2px solid #333",
                borderRadius: "10px",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                textDecoration: "none"
            }}
        >
            {joke}
        </a>
    );
};

export default JokeGenerator;