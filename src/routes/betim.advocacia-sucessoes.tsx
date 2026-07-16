import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/betim/advocacia-sucessoes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/betim/advocacia-sucessoes"!</div>
}
