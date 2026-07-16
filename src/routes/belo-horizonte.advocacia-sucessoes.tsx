import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/belo-horizonte/advocacia-sucessoes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/belo-horizonte/advocacia-sucessoes"!</div>
}
