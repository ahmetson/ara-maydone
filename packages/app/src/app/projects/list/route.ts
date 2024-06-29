import { Ara, FrogWars } from '../../../../public/projects'

let projects = [Ara, FrogWars]

export async function GET() {
  return Response.json(projects)
}
