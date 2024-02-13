const qrTextEl = document.getElementById('qrTextForm');
const qrImage = document.getElementById('qrImage')
const qrImageContainer = document.getElementsByClassName('hide')[0]
const qrInputText = document.getElementById('qrInputText')
const gernerateBtn = document.getElementById('generateBtn')


const renderQRCode = ((url) => {
  if (!url) return;
  gernerateBtn.innerText = "Generating..."

  qrImage.src = url
  const onImageLoad = () => {
    qrImageContainer.classList.remove('hide')
    gernerateBtn.innerText = "Generated"
  }
  qrImage.addEventListener('load', onImageLoad)
})

qrTextEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(qrTextEl);
  const qrText = formData.get('qrText');
  console.log(qrText);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`
  renderQRCode(qrUrl);
})

qrInputText.addEventListener('keyup', () => {
  if (!qrInputText.value.trim()) {
    qrImageContainer.classList.add('hide')
    gernerateBtn.innerText = 'Generate'
  }
})