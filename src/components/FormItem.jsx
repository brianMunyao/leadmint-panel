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
	disabled,
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
					disabled={disabled}
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
		font-size: 14.5px;
	}
	div {
		position: relative;
		width: 100%;
		height: 42px;
		border: 1.7px solid #cbcbcb;
		border-radius: 6px;
		overflow: hidden;
		* {
			position: absolute;
		}
		svg {
			z-index: 1;
			left: 10px;
			top: 50%;
			transform: translateY(-50%);
			color: #3c3c3c;
		}
		input {
			border: none;
			background: none;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			padding: 2px 2px 2px 35px;

			&:disabled {
				cursor: not-allowed;
				background: #f5f5f5;
			}
		}
	}
	&:has(:focus) {
		div {
			border: 1.7px solid ${colors.blueDark};
		}
	}
`;

export default FormItem;
