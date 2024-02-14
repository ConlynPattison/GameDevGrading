import { useState, useEffect } from "react";
import styles from "./Assignments.module.css"

const PlatformerPart1 = () => {
    const [sum, setSum] = useState(0);
    const [extra, setExtra] = useState(0);
    const [checked, setChecked] = useState(0);

    useEffect(() => {
        setSum(checked + extra);
    }, [checked, extra])

    const handleExtraChange = (event) => {
        setExtra(Number(event.target.value));
    }

    const handleCheck = (event) => {
        const value = Number(event.target.value);
        setChecked((prevChecked) => prevChecked + (event.target.checked ? value : -value));
    }

    return (
        <div>
            <header>
                <h1>Grading: Platformer Part 1</h1>
            </header>
            <h2>
                Student Name: <input type="text" />
            </h2>
            <section className={styles.column}>
                <h3>Level Parser</h3>
                <label><input type="checkbox" name="parser" value={10} onChange={handleCheck} /> Level Parser used to create a physical level </label>
            </section>
            <section className={styles.column}>
                <h3>Materials</h3>
                <label><input type="checkbox" name="materials" value={5} onChange={handleCheck} /> Custom material assigned to each block type </label>
                <label><input type="checkbox" name="materials" value={5} onChange={handleCheck} /> Assigning a single texture to each material </label>
            </section>
            <section className={styles.column}>
                <h3>GUI</h3>
                <p>Keeping track of points, coins, time left in the level</p>
                <label><input type="checkbox" name="gui" value={3} onChange={handleCheck} /> Add spots for each category on the UI roughly mirroring the reference </label>
                <label><input type="checkbox" name="gui" value={2} onChange={handleCheck} /> Implement a time count down from start to complete the level (must count down from the start) </label>
            </section>
            <section className={styles.column}>
                <h3>Raycasting</h3>
                <label><input type="checkbox" name="raycasting" value={2.5} onChange={handleCheck} /> Bricks destroy themselves </label>
                <label><input type="checkbox" name="raycasting" value={2.5} onChange={handleCheck} /> '?' for this version will add coins without limit to the UI </label>
            </section>
            <section className={styles.column}>
                <h3>Extra</h3>
                <input className={styles.open} type="number" value={extra} max={5} min={0} onChange={handleExtraChange} />
                <ul>
                    <li>Destroying a break creates and plays a break effect similar to the real game</li>
                    <li>Clicking on a block that adds a coin will make a coin animate briefly upwards like the real game</li>
                    <li>Animate the “?” block through the different colored version of it over time</li>
                    <li>Make the camera scroll horizontally by pressing the left and right cursor keys</li>
                    <li>Other creative twists</li>
                </ul>
            </section>
            <section className={styles.column}>
                <h3>Git Issues</h3>
                <label><input type="checkbox" name="git" value={-1.5} onChange={handleCheck} /> Invalid GitHub Link </label>
                <label><input type="checkbox" name="git" value={-1.5} onChange={handleCheck} /> Nonfunctional/Empty Repo </label>
            </section>
            <h3>
                TOTAL: {sum}/30
            </h3>
        </div>
    );
}

export default PlatformerPart1;