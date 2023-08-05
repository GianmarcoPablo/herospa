import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes/routes'
import PrivateRoute from './PrivateRoute'
import PublicRouter from './PublicRouter'

const AppRouter = () => {
    return (
        <>
            <Routes>
                
                <Route path='/login' element={
                    <PublicRouter>
                        <LoginPage />
                    </PublicRouter>
                } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                }/>

            </Routes>
        </>
    )
}

export default AppRouter