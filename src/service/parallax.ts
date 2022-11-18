import React from "react"

export const parallaxinit = (app: any) => {
    if (app) {
        const speed = 0.03;
        const ratio = 50;

        let positionX = 0, positionY = 0;
        let coordXpocent = 0, coordYpocent = 0;

        const setMouseParallaxStyle = () => {
            const image = app.querySelector('.app__bg')
            if (image) {
                const distX = coordXpocent - positionX
                const distY = coordYpocent - positionY

                positionX = positionX + (distX * speed)
                positionY = positionY + (distY * speed)
                image.style.transform = `translate(${positionX / ratio}%, ${positionY / ratio}%`

                requestAnimationFrame(setMouseParallaxStyle)
            }

        }
        setMouseParallaxStyle()

        app.addEventListener("mousemove", (e: React.MouseEvent) => {
            const appWidth = app.offsetWidth
            const appHeight = app.offsetWidth

            const coordX = e.pageX - appWidth / 2
            const coordY = e.pageY - appHeight / 2
            coordXpocent = coordX / appWidth * 100
            coordYpocent = coordY / appHeight * 100
        })
    }

}