const totalMarksEl = document.querySelector('#totalMarks')
const percentageEl = document.querySelector('#percentage')
const calculateFormEl = document.getElementById('calculateForm')
const calculateMarks = (event) => {
  const maxMarks = 600;
  event.preventDefault();
  const formData = new FormData(calculateFormEl)
  const data = {};
  formData.forEach((value, key) => {
    data[key] = +value;  // + converts string into number
  })
  console.log(data)
  const totalMarks = data.english + data.hindi + data.maths + data.science + data.computer + data.sanskrit
  totalMarksEl.innerHTML = totalMarks
  percentageEl.innerHTML = Math.floor((totalMarks / maxMarks) * 100)

}

