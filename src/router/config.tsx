import type { RouteObject } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import Layout from '@/components/feature/Layout';
import Home from '@/pages/home/page';
import Imoveis from '@/pages/imoveis/page';
import PropertyDetail from '@/pages/property/page';
import Servicos from '@/pages/servicos/page';
import Sobre from '@/pages/sobre/page';
import Contato from '@/pages/contato/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'imoveis', element: <Imoveis /> },
      { path: 'imoveis/:slug', element: <PropertyDetail /> },
      { path: 'servicos', element: <Servicos /> },
      { path: 'sobre', element: <Sobre /> },
      { path: 'contato', element: <Contato /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;