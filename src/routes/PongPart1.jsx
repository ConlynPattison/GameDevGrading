import { useState, useEffect } from "react";
import styles from "./Assignments.module.css"

const PongPart1 = () => {
	const [sum, setSum] = useState(0);
	const [paddle, setPaddle] = useState(0);
	const [behavior, setBehavior] = useState(0);
	const [extra, setExtra] = useState(0);
	const [checked, setChecked] = useState(0);

	useEffect(() => {
		setSum(paddle + behavior + checked + extra);
	}, [paddle, behavior, checked, extra])

	const handleExtraChange = (event) => {
		setExtra(Number(event.target.value));
	}

	const handlePaddleChange = (event) => {
		setPaddle(Number(event.target.value));
	}

	const handleBehaviorChange = (event) => {
		setBehavior(Number(event.target.value));
	}

	const handleCheck = (event) => {
		const value = Number(event.target.value);
		setChecked((prevInvalid) => prevInvalid + (event.target.checked ? value : -value));
	}

	return (
		<div>
			<header>
				<h1>Grading: Pong Part 1</h1>
			</header>
			<h2>
				Student Name: <input type="text" />
			</h2>
			<section className={styles.column}>
				<h3>Paddle Controller(s)</h3>
				<label><input type="radio" name="paddle-approach" value={5} onChange={handlePaddleChange} /> Keys are assigned to each paddle </label>
				<label><input type="radio" name="paddle-approach" value={7} onChange={handlePaddleChange} /> Reference the input manager to control separately each one </label>
				<label><input type="checkbox" name="paddle-additional" value={3} onChange={handleCheck} /> Have one manager managing both paddles or one script that works for both paddles (not LeftPaddle, RightPaddle) </label>
			</section>
			<section className={styles.column}>
				<h3>Ball Behavior</h3>
				<label><input type="radio" name="behavior-approach" value={3} onChange={handleBehaviorChange} /> Only physics material to bounce off paddles </label>
				<label><input type="radio" name="behavior-approach" value={7} onChange={handleBehaviorChange} /> Using the collision to give the ball a predictable Pong trajectory </label>
				<label><input type="checkbox" name="behavior-additional" value={2} onChange={handleCheck} /> Incremenet the speed after paddle hits the paddle (resets after goal) </label>
				<label><input type="checkbox" name="behavior-additional" value={1} onChange={handleCheck} /> When it starts it sends the ball toward the player that got scored on </label>
			</section>
			<section className={styles.column}>
				<h3>Scoring</h3>
				<label><input type="checkbox" name="scoring" value={1} onChange={handleCheck} /> Writing "Game Over, [Left, or Right] Paddle Wins", resetting the score to 0-0, when one player hits 11 pts </label>
				<label><input type="checkbox" name="scoring" value={2} onChange={handleCheck} /> Writing to console each time a player scores, who scored, and what the score is </label>
				<label><input type="checkbox" name="scoring" value={4} onChange={handleCheck} /> Each player score is tracked </label>
			</section>
			<section className={styles.column}>
				<h3>Plinko</h3>
				<label><input type="radio" name="plinko" value={3} onChange={handleCheck} /> Complete Plinko exercise </label>
			</section>
			<section className={styles.column}>
				<h3>Extra</h3>
				<input className={styles.open} type="number" value={extra} max={5} min={0} onChange={handleExtraChange} />
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

export default PongPart1;