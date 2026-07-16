import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/areas-de-atuacao')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/areas-de-atuacao"!</div>
}
