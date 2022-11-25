import { IProject } from "../models/IProject";

export const dataProjects: IProject[] = [
    {
        name: 'Корпоративный сайт',
        description: `Верстка сайта выполнена на Bootstrap. Натянут на WordPress. С помощью WordPress реализовано: 
        блог, кастомное меню, футер, сайдбар.
        Сайт находится в процессе натяжки
        `,
        link: 'https://dimkless.ru/band-digital/',
        technologies: ['Html', 'CSS', 'javaScript', 'WordPress'],
        image: 'band-digital.png'
    },
    {
        name: 'Галерея',
        description: `
            Небольшая галерея изображений в интересном стиле с параллакс эффектом
        `,
        link: 'https://dimkless.ru/accordionSlider/',
        technologies: ['Html', 'CSS', 'javaScript'],
        image: 'gellary.png'
    },
    {
        name: 'Личный сайт',
        description: `
            Личный сайт портфолио сделанынй на ReactJS, с использованием языка TypeScript
        `,
        link: 'https://dimkless.ru/',
        technologies: ['Html', 'CSS', 'TypeScript', 'ReactJS'],
        image: 'main.png'
    },
    {
        name: 'Сайт путешествий',
        description: `
            Небольшой лендинг туристического агентсва. Полностью адаптивная верстка, несколько различных слайдеров. Реализована отправка заявок на почту
        `,
        link: 'https://dimkless.ru/pero-travel',
        technologies: ['Html', 'CSS', 'javaScript', "PHP"],
        image: 'pero.png'
    },
    {
        name: 'Лендинг сапсерфинга',
        description: `
            Небольшой лендинг продажи доски для сапсёрфинга
        `,
        link: 'https://dimkless.ru/sup',
        technologies: ['Html', 'CSS',],
        image: 'sup.jpg'
    },
    {
        name: 'Вертикальный слайдер',
        description: `
            Слайдер выполненный в необычном стиле
        `,
        link: 'https://dimkless.ru/verticalSlider',
        technologies: ['Html', 'CSS', 'javaScript'],
        image: 'verticalSlider.jpg'
    }

]