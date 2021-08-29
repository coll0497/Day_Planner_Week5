var todaysDate = moment().format("dddd MMMM Do");
console.log(todaysDate);
$("#currentDay").text(todaysDate);

 let currentHour = moment().hour();
console.log(currentHour)

for (i = 6; i < 18; i++) {
  let hour = i % 12 
  == 0 ? 12 : i % 12;
  let currentClass = "present";
  console.log(i)

  if  (currentHour < i) {
    currentClass = "future";
  } else if (currentHour > i) {
    currentClass = "past";
  }
  $(`<div class="row ${currentClass}">
      <div class="hour"> ${hour}</div> 
      <textarea hourid="${i}" class="${currentClass}"></textarea>
    </div>`).appendTo(`.container`);
}
