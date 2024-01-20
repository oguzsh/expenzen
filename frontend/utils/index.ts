const isMorning = () => {
  const hours = new Date().getHours();
  return hours >= 6 && hours < 12;
};

const isAfternoon = () => {
  const hours = new Date().getHours();
  return hours >= 12 && hours < 18;
};

const isEvening = () => {
  const hours = new Date().getHours();
  return hours >= 18 && hours < 21;
};

const isNight = () => {
  const hours = new Date().getHours();
  return hours >= 21 || hours < 6;
};

export const getGreetingMessage = () => {
  if (isMorning()) {
    return 'Good morning 🌞';
  } else if (isAfternoon()) {
    return 'Good afternoon 🌅';
  } else if (isNight()) {
    return 'Good night 🌝';
  } else if (isEvening()) {
    return 'Good evening 🌆';
  } else {
    return 'Have a nice day 🌞';
  }
};
