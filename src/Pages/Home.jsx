import React from 'react'
import {Link} from 'react-router-dom'
const Home = ({hoteles}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Stars</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {hoteles.map((hotel, key) => {
            return (
              <tr key={key}>
                <td>{hotel.name}</td>
                <td>{hotel.city}</td>
                <td>{hotel.stars}</td>
                <td><Link to={'/details/' + hotel.name}>Ver</Link></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home