interface DisplayProps {
  children: React.ReactNode
}

export default function Display({children}: DisplayProps) {
  return (
    <main className="w-screen h-screen absolute">
      {children}
    </main>
  )
}