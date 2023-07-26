import React from 'react';
import { styled } from 'styled-components';

import colors from '../config/colors';

const ErrorComponent = ({ errorMessage = '' }) => {
	return <Container>{errorMessage}</Container>;
};

const Container = styled.div`
	background: ${colors.dangerLight};
	color: ${colors.danger};
	border: 1px solid ${colors.danger};
	padding: 20px;
	border-radius: 10px;
`;

export default ErrorComponent;
