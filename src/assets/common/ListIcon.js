const ListIcon = ({ isActive, ...props }) => {
  return (
    <svg
      {...props}
      width="25"
      height="29"
      viewBox="0 0 25 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H2.71949V29H0V0ZM9.51823 5.8H19.0365V8.7H9.51823V5.8ZM9.51823 11.6H19.0365V14.5H9.51823V11.6Z"
        fill={isActive ? "#009688" : "#DEDEDE"}
      />
      <path
        d="M21.7558 0H4.0791V29H21.7558C23.2556 29 24.4753 27.6994 24.4753 26.1V2.9C24.4753 1.30065 23.2556 0 21.7558 0ZM21.7558 26.1H6.7986V2.9H21.7558V26.1Z"
        fill={isActive ? "#009688" : "#DEDEDE"}
      />
    </svg>
  );
};

export default ListIcon;
