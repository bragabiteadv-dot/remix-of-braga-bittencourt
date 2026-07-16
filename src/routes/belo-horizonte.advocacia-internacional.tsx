import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/belo-horizonte/advocacia-internacional')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <div>Hello "/belo-horizonte/advocacia-internacional"!</div>
}
