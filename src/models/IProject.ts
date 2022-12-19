import { ITechnology } from "./ITechnology"

export interface IProject {
    id: number
    name: string
    description: string
    technologies: ITechnology[]
    link: string
    imagejpg?: string
    imagewebp?: string
    createdAt: string
}