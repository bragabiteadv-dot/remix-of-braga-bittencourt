import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/betim/advocacia-familia')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/betim/advocacia-familia"!</div>
}
