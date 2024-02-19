import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main className="Missing">
      <h1>Error 404</h1>
      <p>Page Not Found</p>
      <p>
          <Link to='/'>Visit Our Homepage</Link>
      </p>
    </main>
  )
}

export default Missing