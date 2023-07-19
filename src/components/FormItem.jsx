import React from 'react';
import { styled } from 'styled-components';

import colors from '../config/colors';

const FormItem = ({
	name,
	label,
	inputType = 'text',
	placeholder,
	value,
	Icon,
	error,
}) => {
	return (
		<Container>
			<label htmlFor={name}>{label}</label>
			<div>
				<Icon />
				<input
					type={inputType}
					name={name}
					placeholder={placeholder}
					value={value}
					id={name}
				/>
			</div>
			{error && <p className="form-error">{error}</p>}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	label {
		font-size: 15px;
	}
	div {
		position: relative;
		width: 100%;
		height: 40px;
		border: 1.5px solid #cbcbcb;
		border-radius: 4px;
		* {
			position: absolute;
		}
		svg {
			z-index: 1;
			left: 7px;
			top: 50%;
			transform: translateY(-50%);
		}
		input {
			border: none;
			background: none;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			padding: 2px 2px 2px 30px;
		}

		&:has(:focus) {
			border: 1.5px solid ${colors.blueDark};
		}
	}
`;

export default FormItem;
