import { RouterProvider } from 'react-router'
import {routes} from "./app.routes.jsx"
import FaceExpression from './features/Expression/components/FaceExpression'
import { AuthProvider } from './features/auth/auth.context'

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={routes}/>
    </AuthProvider>
  )
}

export default App