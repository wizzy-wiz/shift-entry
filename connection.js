mainpackage = {
  MShiftName: null,
  MShiftStart: null,
  MShiftEnd: null,
};

function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());

  value.names = data.getAll("Name");
  value.starts = data.getAll("Start");
  value.ends = data.getAll("End");

  namesS = value.names;
  startS = value.starts;
  endS = value.ends;

  shiftpackage = {
    ShiftName: namesS,
    ShiftStart: startS,
    ShiftEnd: endS,
  };

  const jsonContent = JSON.stringify(shiftpackage);

  mainpackage.MShiftName = shiftpackage.ShiftName;
  mainpackage.MShiftStart = shiftpackage.ShiftStart;
  mainpackage.MShiftEnd = shiftpackage.ShiftEnd;

  console.log({ mainpackage });
  return mainpackage;
}

const data = JSON.stringify(mainpackage);

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

// module.exports(mainpackage);