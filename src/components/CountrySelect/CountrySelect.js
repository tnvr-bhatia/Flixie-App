import React from "react";
import { Select } from "antd";

const CountrySelect = ({
	data,
	style,
	placeholder,
	defaultValue,
	onChange
}) => {
	const { Option } = Select;
	return (
		<Select
			showSearch
			style={style}
			placeholder={placeholder}
			optionFilterProp="children"
			defaultValue={defaultValue}
			onChange={onChange}
			filterOption={(input, option) =>
				option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
			}
		>
			{data.map(option => (
				<Option
					value={option["iso_3166_1"]}
					data-option={option["english_name"]}
					key={option["iso_3166_1"]}
				>
					{`${option["english_name"]} (${option["iso_3166_1"]})`}
				</Option>
			))}
		</Select>
	);
};

export default CountrySelect;
