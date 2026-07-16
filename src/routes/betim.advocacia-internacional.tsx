import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/betim/advocacia-internacional')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/betim/advocacia-internacional"!</div>
}
