import React, { useState } from "react";
import * as Font from "expo-font";

import { StyleSheet, Text, View } from "react-native";
import { LoginScreen } from "./src/screens/LoginScreen";
import { HelloScreen } from "./src/screens/HelloScreen";
import { SignUpScreen } from "./src/screens/SignUpScreen";
import { AppLoading } from "expo";
import { THEME } from "./src/theme";

async function loadApplication() {
	await Font.loadAsync({
		"roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
		"roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
		"roboto-thin": require("./assets/fonts/Roboto-Thin.ttf"),
		"roboto-light": require("./assets/fonts/Roboto-Thin.ttf"),
	});
}

export default function App() {
	const [isReady, setIsReady] = useState(false);

	if (!isReady) {
		return (
			<AppLoading
				startAsync={loadApplication}
				onError={(err) => console.log(err)}
				onFinish={() => setIsReady(true)}
			/>
		);
	}

	let content = <SignUpScreen />;

	return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: THEME.LOGIN_BACKGROUND,
	},
});
