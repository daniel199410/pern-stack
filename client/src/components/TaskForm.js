import {Button, Card, CardContent, CircularProgress, Grid, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function TaskFOrm(){
	const navigate = useNavigate();
	const params = useParams();
	const [task, setTask] = useState({title: '', description: ''});
	const [loading, setLoading] = useState(false);
	const [editing, setEditing] = useState(false);

	useEffect(() => {
		if(params.id) {
			loadTask(params.id).then();
		}
	}, [params.id]);

	const loadTask = async id => {
		const response = await fetch(`http://localhost:4000/tasks/${id}`)
		const data = await response.json();
		setTask({ title: data.title, description: data.description })
		setEditing(true);
	}

	const handleChange = e => setTask({...task, [e.target.name]: e.target.value})

	const handleSubmit = async e => {
		e.preventDefault();
		setLoading(true);
		if(editing) {
			await fetch(`http://localhost:4000/tasks/${params.id}`, {
				method: 'PUT',
				body: JSON.stringify(task),
				headers: {'Content-type': 'application/json'}
			});
		} else {
			await fetch('http://localhost:4000/tasks', {
				method: 'POST',
				body: JSON.stringify(task),
				headers: {'Content-type': 'application/json'}
			});
		}
		setLoading(false);
		navigate('/');
	};

	return (
		<Grid container direction='column' alignItems='center' justifyContent='center'>
			<Grid item xs={3}>
				<Card sx={{mt:5}} style={{backgroundColor: '#1E272E', padding: '1rem'}}>
					<Typography variant='5' textAlign='center' color='white'>{ editing ? 'Update' : 'Create' } task</Typography>
					<CardContent>
						<form onSubmit={handleSubmit}>
							<TextField
								variant='filled'
								label='Title'
								sx={{display: 'block', margin: '.5rem 0'}}
								name='title'
								value={task.title}
								onChange={handleChange}
								inputProps={{style: {color: 'white'}}}
								InputLabelProps={{style: {color: 'white'}}}
							/>
							<TextField
								variant='filled'
								label='Description'
								multiline
								rows={4}
								sx={{display: 'block', margin: '.5rem 0'}}
								name='description'
								value={task.description}
								onChange={handleChange}
								inputProps={{style: {color: 'white'}}}
								InputLabelProps={{style: {color: 'white'}}}
							/>
							<Button
								variant='contained'
								color='primary'
								type='submit'
								disabled={!task.description || !task.title || loading}
							>
								{loading ? <CircularProgress color='inherit' size={24}/> : editing ? 'Update' : 'Create'}
							</Button>
						</form>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	)
}
