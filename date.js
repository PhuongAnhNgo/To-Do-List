module.exports.getDate = function () {
  let today = new Date();
  let options = {
    weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  return today.toLocaleDateString("de-DE", options);
};

module.exports.theday = function () {
  let today = new Date();
  let options = {
    weekday: "short",
  };
  return today.toLocaleDateString("de-DE", options);
};
