import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Assignments.module.css"

const Home = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.link}>
			<p onClick={() => navigate("pong1")}> Pong Part 1 </p>
			<p onClick={() => navigate("pong2")}> Pong Part 2 </p>
			<p onClick={() => navigate("platformer1")}> Platformer Part 1 </p>
			<p onClick={() => navigate("platformer2")}> Platformer Part 2 </p>
			<p onClick={() => navigate("space-invaders1")}> Space Invaders Part 1 </p>
			<p onClick={() => navigate("space-invaders2")}> Space Invaders Part 2 </p>
			<p onClick={() => navigate("tower-defense1")}> Tower Defense Part 1 </p>
			<p onClick={() => navigate("tower-defense3")}> Tower Defense Part 3 </p>
		</div>
	)
}

export default Home;