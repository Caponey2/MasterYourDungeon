import React, { useState } from 'react';
import SidebarButton from './SideBarButton';
import { Box, Button, Nav, Text, Grommet, defaultProps } from 'grommet';

const SidebarNav = () => {
	const [active, setActive] = useState();
	return (
		// Uncomment <Grommet> lines when using outside of storybook
		<Grommet theme={defaultProps.theme}>
			<Box fill direction='row'>
				<Nav background='brand'>
					{['Dashboard', 'Devices', 'Settings'].map((label) => (
						<SidebarButton
							key={label}
							label={<Text color='white'>{label}</Text>}
							active={label === active}
							onClick={() => setActive(label)}
						/>
					))}
				</Nav>
			</Box>
		</Grommet>
	);
};

// export const Sidebar = () => <SidebarNav />;

// Sidebar.args = {
// 	full: true,
// };

export default SidebarNav;
