import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/betim')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/betim"!</div>
}
