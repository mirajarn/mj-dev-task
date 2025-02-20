import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Frontpage from './components/Frontpage';
import ViewUsers from './components/ViewUsers';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Summary: 
The App component sets up routing using React Router, with Layout providing a consistent structure. 
Routes are defined to render the Frontpage component at the root path and ViewUsers at "/userlist". 
Bootstrap styles are applied globally to ensure a responsive design. */
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/userlist" element={<ViewUsers />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
