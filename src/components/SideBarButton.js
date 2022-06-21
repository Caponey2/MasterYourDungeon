import React from 'react';
import { Box, Button, Nav, Text, Grommet, defaultProps } from 'grommet';

const SidebarButton = ({ label, ...rest }) => {
	return (
		<Button plain {...rest}>
			{({ hover }) => (
				<Box
					background={hover ? 'dark-6' : 'dark-1'}
					pad={{ horizontal: 'large', vertical: 'medium' }}>
					<Text size='large'>{label}</Text>
				</Box>
			)}
		</Button>
	);
};

export default SidebarButton;
