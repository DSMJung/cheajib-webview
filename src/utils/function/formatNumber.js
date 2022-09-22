export const formatNumber = (value) => {
  if (isNaN(value)) {
    return 0;
  }
  return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
