import React from 'react';
import { styled } from 'styled-components';

const FormItemAlt = ({
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
			{label && <label htmlFor={name}>{label}</label>}
			<input
				type={inputType}
				name={name}
				placeholder={placeholder}
				value={value}
				id={name}
				disabled={disabled}
			/>
			{error && <p className="form-error">{error}</p>}
		</Container>
	);
};

const Container = styled.div`
	margin: 10px 0 12px;
	input {
		border: 1.5px solid #dfdfdf;
		border-radius: 5px;
		padding: 8px;
		width: 100%;
		transition: all 0.1s linear;

		&::placeholder {
			opacity: 0.8;
		}
		&:focus {
			border: 1.5px solid #114edc46;
			outline: 2px solid #114edc46;
		}
	}
`;

export default FormItemAlt;
