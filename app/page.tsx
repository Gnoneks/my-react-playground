import AppsList from './components/apps-list/Apps-list'
import Header from './components/header/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-300">
      <Header />
      <AppsList />
    </main>
  )
}
