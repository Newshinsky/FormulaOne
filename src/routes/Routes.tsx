import { Route, Routes } from "react-router-dom"
import MainStanding from "../components/mainStanding/MainStanding"
import ConstructorStandingContainer from "../pages/constructorStanding/containers/ConstructorStandingContainer"
import DriverStandingContainer from "../pages/driverStanding/containers/DriverStandingContainer"
import { ROUTES_NAMES } from "./RoutesName"



const RoutesWay = () => {
    return (
        <>
            <Routes>
                <Route path={ROUTES_NAMES.DRIVER_STANDING} element={
                    <DriverStandingContainer />
                } />
                <Route path={ROUTES_NAMES.CONSTRUCTOR_STANDING} element={
                    <ConstructorStandingContainer />
                } />
            </Routes >
        </>
    )
}

export default RoutesWay