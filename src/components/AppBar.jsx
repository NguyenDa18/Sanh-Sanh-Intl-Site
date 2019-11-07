import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';

const AppBar = () => {
	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div>
			<Navbar color="dark" dark fixed="top">
				<NavbarBrand href="/" className="mr-auto">Sanh Sanh International</NavbarBrand>
				<Button color="info" onClick={e => window.scrollTo({ top: 0, behavior: 'smooth' })}>Scroll to Top</Button>{' '}
				<NavbarToggler onClick={toggleNavbar} className="mr-2" />
				{' '}
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href="/pots">Pots/Pans/Woks</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/stoves">Stoves/Ovens</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/household">Household Items</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/bowls">Bowls/Baskets</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/ceramics">Ceramics</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/tableware">Tableware</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/gadgets">Kitchen Utensils</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/collections">Collections</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default AppBar;