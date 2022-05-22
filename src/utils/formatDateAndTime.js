function formatDateAndTime(date) {
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    hour12: true,
    minute: "2-digit",
  };

  return new Date(date).toLocaleDateString("es", options);
}

export default formatDateAndTime;
