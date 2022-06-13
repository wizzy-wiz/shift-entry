function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());

  value.names = data.getAll("Name");
  value.starts = data.getAll("Start");
  value.ends = data.getAll("End");

  console.log({ value });
}

//const data = JSON.stringify(mainpackage);

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

// module.exports(mainpackage);