import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authLayout/register/')({
  component: Register,
})

function Register() {
  return (
    <div className="p-2">
      <h3>Register!</h3>
    </div>
  )
}
