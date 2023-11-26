import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage";
import PerfilUserMobile from "../pages/Perfilpages/PerfilUser";
import PerfilRestaurantMobile from "../pages/Perfilpages/PerfilRestaurant"
import EditPerfilUserMobile from "../pages/Perfilpages/EditPerfilUser"
import EditPerfilRestaurantMobile from "../pages/Perfilpages/EditPerfilRestaurant"

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="HomePage" component={HomePage} />
			<Screen name="PerfilUserMobile" component={PerfilUserMobile} />
			<Screen name="PerfilRestaurantMobile" component={PerfilRestaurantMobile} />
			<Screen name="EditPerfilUserMobile" component={EditPerfilUserMobile} />
			<Screen name="EditPerfilRestaurantMobile" component={EditPerfilRestaurantMobile} />
			
		</Navigator>
	);
}