import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/duvidas')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/duvidas"!</div>
}
