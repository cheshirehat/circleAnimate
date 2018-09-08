(function() {
  'use strict'

  const circleBox = []
  const canvas = document.getElementById('circle')
  const circle = canvas.getContext('2d')
  const width = canvas.width
  const height = canvas.height
  const endAngle = Math.PI * 2
  const antiCloclWise = false

  function circleAnimate () {
    circle.clearRect(0, 0, width, height)
    circleBox.forEach(circle => {
      const circleList = circle
      circleList.updateCircle()
    })
    requestAnimationFrame(circleAnimate)
  }

  function circleDraw () {
    for (let i = 0; i < 50; i++) {
      circleBox[i] = circleCreate()
    }
  }

  function circleCreate () {
    let xCord = Math.floor(Math.random() * width)
    let yCord = Math.floor(Math.random * height)
    let radius = Math.floor(Math.random() * 100)
    let updateCircle = () => {
      circle.beginPath()
      circle.arc(xCord, yCord, radius, endAngle, antiCloclWise)
      circle.strokeStyle = colorCreateHSL()
      circle.stroke()
      if (radius < 100) {
        radius += 2
      } else {
        xCord = Math.floor(Math.random() * width)
        yCord = Math.floor(Math.random() * height)
        radius = 0
      }
    }
    return {
      updateCircle,
      xCord,
      yCord,
      radius
    }
  }

  // RGBでカラーコード生成
  function colorCreateRGB () {
    const r = Math.round(Math.random() * 255)
    const g = Math.round(Math.random() * 255)
    const b = Math.round(Math.random() * 255)
    const color = `rgb(${r}, ${g}, ${b})`

    return color
  }

  // HSLでカラーコード生成
  function colorCreateHSL () {
    const h = Math.random() * 360
    const color = `hsl(${h}, 80%, 60%)`

    return color
  }

  window.requestAnimationFrame = (() => {
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    (callback => window.setTimeout(callback, 50))
  }) ()

  circleDraw()
  circleAnimate()
}) ()