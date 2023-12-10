import React, { useEffect, useState } from 'react'

const Loan = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:8000/loan')
      const data = await res.json()
      setData(data)
    }
    getData();
  }, [])
  const tableData = data.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.address}</td>
        <td>{item.loanAmount}</td>
        <td>{item.loanType}</td>
        <td>{item.loanDuration}</td>
        <td>{item.loanStatus}</td>
      </tr>
    )
  })
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Loan Amount</th>
            <th>Loan Type</th>
            <th>Loan Duration</th>
            <th>Loan Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
    </div>
  )
}


export default Loan