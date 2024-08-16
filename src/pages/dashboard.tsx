// pages/dashboard.tsx
import Route from '../components/Route'
import SignOut from '../components/SignOut'
import UrlShortener from '../components/UrlShortener'

const Dashboard = () => {
  return (
    <Route>
      <div className="container">
        <header>
          <h1>Dashboard</h1>
          <SignOut />
        </header>
        <UrlShortener />
      </div>
    </Route>
  )
}

export default Dashboard
