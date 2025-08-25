import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'study',
        element: <StudyPage />
      },
      {
        path: 'cards',
        element: <CardsPage />
      },
      {
        path: 'progress',
        element: <ProgressPage />
      },
      {
        path: 'settings',
        element: <SettingsPage />
      }
    ]
  }
]);
