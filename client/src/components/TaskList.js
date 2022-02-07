import {Fragment, useEffect, useState} from "react";
import {Button, Card, CardContent, Typography} from "@mui/material";

export default function TaskList() {
	const [tasks, setTasks] = useState([]);
	const loadTasks = async () => {
		const response = await fetch('http://localhost:4000/tasks');
		const data = await response.json();
		setTasks(data);
	}

	useEffect(() => {
		loadTasks().then();
	}, [])

	return (
		<Fragment>
			<h1>Tasks</h1>
			{tasks.map(task => (
				<Card key={task.id} style={{marginBottom: '.7rem', backgroundColor: '#1E272E'}}>
					<CardContent style={{display: "flex", justifyContent: "space-between"}}>
						<div style={{color: "white"}}>
							<Typography>{task.title}</Typography>
							<Typography>{task.description}</Typography>
						</div>
						<div>
							<Button variant='contained' color='inherit' onClick={() => console.log('Updating')}>
								Edit
							</Button>
							<Button
								variant='contained'
								color='warning'
								onClick={() => console.log('deleting')}
								style={{marginLeft: ".5rem"}}
							>Delete</Button>
						</div>
					</CardContent>
				</Card>
			))}
		</Fragment>
	)
}
