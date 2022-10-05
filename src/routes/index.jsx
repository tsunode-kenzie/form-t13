import { Route, Routes } from 'react-router-dom';
import Home from '../page/Home';

const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<Home />} />
  </Routes>
);

export default RoutesMain;
