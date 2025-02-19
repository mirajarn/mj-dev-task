import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Frontpage from './components/Frontpage';
import ViewUsers from './components/ViewUsers';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/frontpage" element={<Frontpage />} />
          <Route path="/userlist" element={<ViewUsers />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
