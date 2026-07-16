import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/belo-horizonte')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/belo-horizonte"!</div>
}
