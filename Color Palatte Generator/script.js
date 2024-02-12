const btn = document.getElementById('btn');

const randomColorGenerator = () => {
  const hex = '123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * hex.length)
    color += hex[randomNumber]
  }
  return color;
}

const colorPaletteGenerator = () => {
  const colorPalette = []
  for (let i = 0; i < 4; i++) {
    colorPalette.push(randomColorGenerator())
  }
  return colorPalette;
}
const renderColorPalette = () => {
  const hexColor = colorPaletteGenerator()
  const colorsContainer = document.getElementsByClassName('colors-container')[0]
  colorsContainer.innerHTML = ''
  console.log({ hexColor });

  hexColor.forEach((color, i) => {
    const colorDiv = document.createElement('div')
    colorDiv.id = `color${i + 1}`
    colorDiv.style.background = color;
    colorDiv.className = 'colorBox'

    const colorTag = document.createElement('p')
    colorTag.id = `color${i + 1}Tag`
    colorTag.className = 'colorTag'
    colorTag.innerHTML = color
    colorDiv.appendChild(colorTag)
    colorsContainer.appendChild(colorDiv)
  });

  const copyToClipboard = (id) => {
    const el = document.getElementById(id)
    console.log(el)
    navigator.clipboard.writeText(el.innerText).then(() => {
      alert(`${el.innerText} copied to clipboard`)
    }).catch((err) => {
      alert('unable to copy to clipboard')
    })
  }
  const colorTags = document.querySelectorAll('.colorTag')
  colorTags.forEach((colorTag, i) => {
    colorTag.addEventListener('click', () => {
      copyToClipboard(`color${i + 1}Tag`)
    })
  })
}
renderColorPalette()
btn.addEventListener('click', renderColorPalette)