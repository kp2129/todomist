import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from '../axios';
import { useAuth } from '../contexts/AuthContext';


export default function DefaultLayout() {
	const { user, setUser } = useAuth();
	const [overlayOpen, setOverlayOpen] = useState(false);

	const handleMenuClick = () => {
		setOverlayOpen(!overlayOpen);
	};

	const handleCloseOverlay = () => {
		if (window.innerWidth > 850) {
			setOverlayOpen(false);
		}
	};

	const handleLinkClick = () => {
		setOverlayOpen(false);
	};

	useEffect(() => {
		window.addEventListener('resize', handleCloseOverlay);
		return () => {
			window.removeEventListener('resize', handleCloseOverlay);
		};
	}, []);

	// check if user is logged in or not from server
	useEffect(() => {
		(async () => {
			try {
				const resp = await axios.get('/user');
				if (resp.status === 200) {
					setUser(resp.data.data);
				}
			} catch (error) {
				if (error.response.status === 401) {
					localStorage.removeItem('user');
					window.location.href = '/';
				}
			}
		})();
	}, []);

	// if user is not logged in, redirect to login page
	if (!user) {
		return <Navigate to="/" />;
	}

	// logout user
	const handleLogout = async () => {
		try {
			const resp = await axios.post('/auth/logout');
			if (resp.status === 200) {
				localStorage.removeItem('user');
				window.location.href = '/';
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<View />
			<Navbar switchPage={switchPage} />

			<main className={selectedPage === 'login' ? 'Flex-center' : ''}>
				{selectedPage !== 'login' && <Aside switchPage={switchPage} />}
				{selectedPage in pages ? (
					pages[selectedPage]
				) : (
					<NotFound />
				)}
			</main>
		</>
	);
}