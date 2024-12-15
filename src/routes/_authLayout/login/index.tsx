import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authLayout/login/')({
  component: Login,
})

function Login() {
  return (
    <div className="p-2">
      <h3>Login!</h3>
    </div>
  )
}