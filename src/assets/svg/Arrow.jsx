const Arrow = ({ fill = "#ffffff", ariaLabel = "Flèche", className }) => (
    <svg
        className={className}
        fill={fill}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke={fill}
        role="img"
        aria-label={ariaLabel}
    >
        <g data-name="Layer 2">
            <g data-name="arrow-ios-back">
                <rect width="24" height="24" opacity="0"></rect>
                <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
                    transform="rotate(90 12 12)"></path>
            </g>
        </g>
    </svg>
);

export default Arrow;

