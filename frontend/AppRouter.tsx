import Dashboard from 'pages/Dashboard';
import { Navigate, Route, Routes } from 'react-router';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
