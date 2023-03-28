import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import Server from './Server';

function App() {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    Server.getServers()
      .then((response) => setServers(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    Server.deleteServer(id)
      .then(() => setServers((prevServers) => prevServers.filter((server) => server.id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/servers/new">New Server</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <h1>Servers</h1>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Language</th>
                  <th>Framework</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {servers.map((server) => (
                  <tr key={server.id}>
                    <td>{server.name}</td>
                    <td>{server.language}</td>
                    <td>{server.framework}</td>
                    <td>
                      <Button variant="primary" size="sm" as={Link} to={`/servers/${server.id}`}>
                        View
                      </Button>
                      <Button variant="danger" size="sm" onClick={() => handleDelete(server.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Route>
          <Route path="/servers/new">
            <h1>New Server</h1>
            {/* TODO: Implement form */}
          </Route>
          <Route path="/servers/:id">
            <h1>View Server</h1>
            {/* TODO: Implement server details view */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
