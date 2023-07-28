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
	onChange,
	onBlur,
	touched,

	select,
}) => {
	return select ? (
		<Container error={error && touched}>
			<label htmlFor={name}>{label}</label>
			<div>
				<select
					name={name}
					id={name}
					disabled={disabled}
					onChange={onChange}
					onBlur={onBlur}
				>
					<option value="" selected hidden style={{ color: '#ddd' }}>
						{placeholder}
					</option>
					{select.map((opt, i) => (
						<option key={i} value={opt.val}>
							{opt.label}
						</option>
					))}
				</select>
			</div>
			{error && touched && <p className="form-error">{error}</p>}
		</Container>
	) : (
		<Container error={error && touched}>
			<label htmlFor={name}>{label}</label>
			<div>
				{Icon && <Icon />}
				<input
					type={inputType}
					name={name}
					placeholder={placeholder}
					value={value}
					id={name}
					disabled={disabled}
					onChange={onChange}
					onBlur={onBlur}
				/>
			</div>
			{error && touched && <p className="form-error">{error}</p>}
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
		border: 1.5px solid
			${({ error }) => (error ? 'rgba(217, 84, 79, 0.58)' : '#dfdfdf')};
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
		input,
		select {
			border: none;
			background: none;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			padding: 2px 10px;
			background: ${({ error }) =>
				error ? 'rgba(217, 84, 79, 0.158)' : '#fbfbfb'};

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
