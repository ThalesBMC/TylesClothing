import { createGlobalStyle } from 'styled-components';
// só pegou oq tinha no app.css e colocou aqui em forma de styled componenet
export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Open Sans Condensed';
		padding: 20px 40px;
		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}
	a {
		text-decoration: none;
		color: black;
	}
	* {
		box-sizing: border-box;
	}
`;