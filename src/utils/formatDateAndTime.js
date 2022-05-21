function formatDateAndTime(data) {
  const options = {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  };

  return new Date(data).toLocaleDateString("es", options);
}

export default formatDateAndTime;
