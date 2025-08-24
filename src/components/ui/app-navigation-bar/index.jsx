"use client";

import Link from "next/link";
import { cloneElement } from "react";
import { FaListAlt, FaRecordVinyl, FaToggleOff } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { BiSolidCategory } from "react-icons/bi";
import { usePathname } from "next/navigation";
import "./app-navigation-bar.scss";

function GradientIcon({ icon, active = false }) {
	return (
		<>
			<svg width="0" height="0">
				<linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
					<stop stopColor="#FF1168" offset="0%" />
					<stop stopColor="#FF6A00" offset="100%" />
				</linearGradient>
			</svg>

			{!active &&
				cloneElement(icon, {
					style: { ...(icon.props?.style || {}), fill: `url(#blue-gradient)` },
				})}

			{active && (
				<div className="nav-icon-active">
					{cloneElement(icon, {
						style: { ...(icon.props?.style || {}), color: "white" },
					})}
				</div>
			)}
		</>
	);
}

export default function AppNavigationBar() {
	const pathname = usePathname();
	return (
		<nav className="app-navigation-bar">
			<Link href="/albums">
				<GradientIcon
					active={pathname.includes("/album")}
					icon={<FaRecordVinyl size={32} />}
				/>
			</Link>
			<Link href="/playlist">
				<GradientIcon
					active={pathname === "/playlist"}
					icon={<FaListAlt size={32} />}
				/>
			</Link>
			<Link href="/">
				<GradientIcon
					active={pathname === "/"}
					icon={<TiStarFullOutline size={32} />}
				/>
			</Link>
			<Link href="/categories">
				<GradientIcon icon={<BiSolidCategory size={32} />} />
			</Link>
			<Link href="/">
				<GradientIcon icon={<FaToggleOff size={32} />} />
			</Link>
		</nav>
	);
}
