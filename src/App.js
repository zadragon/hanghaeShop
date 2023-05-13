import Router from "./shared/Router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#be2edd",
			darker: "#053e85",
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router />
		</ThemeProvider>
	);
}

export default App;
