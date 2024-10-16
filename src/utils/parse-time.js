export const parseTime = (timeString) => {
  const timeRegex = /^(\d{2})(\d{2})(AM|PM)$/;
  const match = timeString.match(timeRegex);

  if (!match) {
    throw new Error("Invalid time format");
  }

  let [_, hours, minutes, period] = match;

  hours = parseInt(hours, 10);

  const formattedHours = hours.toString().padStart(2, "0");

  return `${formattedHours}:${minutes} ${period}`;
};
