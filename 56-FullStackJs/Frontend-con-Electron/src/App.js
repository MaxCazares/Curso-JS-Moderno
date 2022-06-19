import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import clienteAxios from './config/axios';

// componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';


function App() {

	const [citas, guardarCita] = useState([]);
	const [consultar, guardarConsulta] = useState(true);

	useEffect(() => {
		const consultarAPI = () => {
			if (consultar) {
				clienteAxios.get('/pacientes')
					.then(respuesta => {
						guardarCita(respuesta.data);
						guardarConsulta(false);
					})
					.catch(error => console.error(error))
			}
		}
		consultarAPI();
	}, [consultar]);

	return (
		<Router>

			<Switch>
				<Route exact path="/" component={() => <Pacientes citas={citas} />} />

				{/* <Switch exact path="/nueva" element={<NuevaCita guardarConsulta={guardarConsulta}/>} /> */}
				<Route exact path="/nueva" component={() => <NuevaCita guardarConsulta={guardarConsulta} />} />

				<Route exact path="/cita/:id"
					render={(props) => {
						const cita = citas.filter(cita => cita._id === props.match.params.id);

						return (
							<Cita
								cita={cita[0]}
								guardarConsulta={guardarConsulta}
							/>
						)
					}} />
			</Switch>

		</Router>
	);
}

export default App;