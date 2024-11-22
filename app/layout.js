'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import './globals.css';

import { Unbounded } from 'next/font/google';
import { AnimatePresence } from 'motion/react';

const unbounded = Unbounded({
	subsets: ['latin'],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={unbounded.className}>
			<body>
				<AnimatePresence mode="wait">
					<AppRouterCacheProvider>{children}</AppRouterCacheProvider>
				</AnimatePresence>
			</body>
		</html>
	);
}
