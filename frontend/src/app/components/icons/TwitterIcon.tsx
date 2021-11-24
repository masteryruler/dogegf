import { SVGProps } from 'react';

const TwitterIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			{...props}
			fill="currentColor"
			width="24"
			height="24"
			viewBox="0 0 21 18"
		>
			<path d="M14.3 2.55011C13.54 2.54999 12.8103 2.84824 12.2679 3.38068C11.7255 3.91313 11.4139 4.63721 11.4 5.39711L11.372 6.97211C11.3703 7.05668 11.3509 7.13994 11.3148 7.21644C11.2787 7.29294 11.2268 7.36094 11.1626 7.41599C11.0984 7.47105 11.0233 7.5119 10.9422 7.53588C10.8611 7.55985 10.7758 7.56641 10.692 7.55511L9.13099 7.34311C7.07699 7.06311 5.10899 6.11711 3.22099 4.54411C2.62299 7.85411 3.79099 10.1471 6.60399 11.9161L8.35099 13.0141C8.434 13.0663 8.50296 13.138 8.55184 13.223C8.60072 13.308 8.62803 13.4036 8.63138 13.5016C8.63474 13.5996 8.61403 13.6969 8.57108 13.785C8.52813 13.8731 8.46423 13.9494 8.38499 14.0071L6.79299 15.1701C7.73999 15.2291 8.63899 15.1871 9.38499 15.0391C14.103 14.0971 17.24 10.5471 17.24 4.69111C17.24 4.21311 16.228 2.55011 14.3 2.55011ZM9.39999 5.36011C9.41744 4.39616 9.71888 3.45878 10.2665 2.66534C10.8142 1.87189 11.5838 1.25763 12.4789 0.899481C13.374 0.541329 14.3549 0.455194 15.2987 0.651862C16.2426 0.848529 17.1074 1.31926 17.785 2.00511C18.496 2.00011 19.101 2.18011 20.454 1.36011C20.119 3.00011 19.954 3.71211 19.24 4.69111C19.24 12.3331 14.543 16.0491 9.77699 17.0001C6.50899 17.6521 1.75699 16.5811 0.394989 15.1591C1.08899 15.1051 3.90899 14.8021 5.53899 13.6091C4.15999 12.7001 -1.32901 9.47011 2.27799 0.786115C3.97099 2.76311 5.68799 4.10911 7.42799 4.82311C8.58599 5.29811 8.86999 5.28811 9.40099 5.36111L9.39999 5.36011Z" />
		</svg>
	);
};

export default TwitterIcon;
