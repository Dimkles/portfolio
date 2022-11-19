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
    }

]