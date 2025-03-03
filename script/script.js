function handleButtonClick(completebtnid, id) {
  document.getElementById(completebtnid).addEventListener("click", function () {
    alert("Board Updated Successfully");
    if (completebtnid === "completed-btn-6") {
      alert("Congrats!!! You have completed all the current task");
    }

    const taskAssignedButton = document.getElementById("task-assigned-btn");
    const previousValue = Number(taskAssignedButton.innerText);
    if (previousValue > 0) {
      taskAssignedButton.innerText = previousValue - 1;
    }
    const navButton1 = document.getElementById("nav-btn-01");
    const navButtonValue = Number(navButton1.innerText);
    if (previousValue > 0) {
      navButton1.innerText = navButtonValue + 1;
    }
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const taskName = document.getElementById(`task-${id}`).innerText;
    const history = document.getElementById("history");
    const showTask = document.createElement("p");
    showTask.innerText = `You Have completed the task ${taskName} at ${timeString}`;
    history.appendChild(showTask);
    showTask.className = "p-3 bg-[#F4F7FF] mb-4 rounded-lg";

    const button = document.getElementById(completebtnid);
    button.className = "bg-gray-400 opacity-40 rounded-xl px-6";
    button.disabled = true;
  });
}
for (let i = 1; i <= 6; i++) {
  const completebtnid = `completed-btn-${i}`;
  handleButtonClick(completebtnid, i);
}

document.getElementById("clear-history").addEventListener("click", function () {
  const history = document.getElementById("history");
  history.innerHTML = "";
});

document.getElementById("discover-btn").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

document
  .getElementById("color-change-btn")
  .addEventListener("click", function () {
    let num1 = Math.floor(Math.random() * 116) + 150;
    let num2 = Math.floor(Math.random() * 116) + 150;
    let num3 = Math.floor(Math.random() * 116) + 150;
    document.body.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
  });

const currentDate = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const day = days[currentDate.getDate()];
const month = months[currentDate.getMonth()];
const date = currentDate.getDate();
const year = currentDate.getFullYear();
const dateFormat = `${day}, ${month} ${date} ${year}`;
document.getElementById("current-date").innerText = dateFormat;
const elementStyle = document.getElementById("current-date");
elementStyle.className = "text-2xl font-semibold";
