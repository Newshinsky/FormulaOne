import { Route, Routes } from "react-router-dom"
import ConstructorInfoContainer from "../pages/constructorInfo/containers/ConstructorInfoContainer"
import ConstructorStandingContainer from "../pages/constructorStanding/containers/ConstructorStandingContainer"
import DriverContainer from "../pages/driverInfo/containers/DriverContainer"
import DriverStandingContainer from "../pages/driverStanding/containers/DriverStandingContainer"
import HomePageContainer from "../pages/homePage/containers/HomePageContainer"
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
                <Route path={ROUTES_NAMES.HOME} element={
                    <HomePageContainer />
                } />
                <Route path={ROUTES_NAMES.DRIVER} element={
                    <DriverContainer />
                } />
                <Route path={ROUTES_NAMES.CONSTRUCTOR} element={
                    <ConstructorInfoContainer />
                } />
            </Routes >
        </>
    )
}

export default RoutesWay