import React, { useState, useEffect } from 'react'
import './App.css'
import deliveryService from './services/deliveries'
import { BrowserRouter as Router } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Switch from 'react-bootstrap/esm/Switch'

const Inputs = ({ address, total, payment, handleAddress, handleTotal, handlePayment, predictions }) => {
  if (predictions.length > 2 && address.length > 0) {
    return (
      <div className="center">
        <div>
          <label>Address: </label><input value={address} onChange={handleAddress} />
          <div className="center">
            <ul>
              {predictions.map(prediction => <li className="suggestion" key={prediction.description} >
                <input className="no-show" defaultValue={prediction.description.slice(0, -9)} onClick={handleAddress} />
              </li>)}
            </ul>
          </div>
        </div>
        <div>
        <label>Total: </label><input placeholder="$0.00" value={total} onChange={handleTotal} />
        </div>
        <div>
        <label>Payment/Tip: </label><input placeholder="$0.00" value={payment} onChange={handlePayment} />
        </div>
      </div>
    )
  }
  return (
    <div className="center">
      <div>
        <label>Address: </label><input value={address} onChange={handleAddress} />
      </div>
      <div>
      <label>Total: </label><input placeholder="$0.00" value={total} onChange={handleTotal} />
      </div>
      <div>
      <label>Payment/Tip: </label><input placeholder="$0.00" value={payment} onChange={handlePayment} />
      </div>
    </div>
  )
}

const AddButtons = ({handleClick, handleTip}) => {
  return (
    <div className="center">
      <button className="add" type="submit" onClick={handleClick}><b>Add Delivery</b></button>
      <button className="add" type="submit" onClick={handleTip}><b>Add Tip</b></button>
    </div>
  )
}

const Display = ({ deliveries, handleDelete, handleUpdate, handleSave, address, total, payment, handleAddress, handlePayment, handleTotal, predictions }) => {
  return (
    <ol>
      {deliveries.map(delivery => 
        <li className="list" key={delivery.id} >
          <div className="top"><b>Address: {delivery.address}</b></div> <div className="center">Total: ${delivery.total}</div> <div className="center">Payment: ${delivery.payment}</div><button className="add" value={delivery.id} onClick={handleUpdate} ><b>Update</b></button><button className="delete" value={delivery.id} onClick={handleDelete} ><b>Delete</b></button>
          <Update showUpdate={delivery.update} handleUpdate={handleUpdate} id={delivery.id} delivery={delivery} handleSave={handleSave} address={address} total={total} payment={payment} handleAddress={handleAddress} handleTotal={handleTotal} handlePayment={handlePayment} predictions={predictions} />
        </li>)}
    </ol>
  )
}

const Pay = ({ deliveries, tips }) => {
  let pay = 0 + tips
  deliveries.map(delivery => pay += (parseFloat(delivery.payment) - parseFloat(delivery.total)))
  return (
    <div className="center">
      <h2>${pay.toFixed(2)}</h2>
    </div>
  )
}

const Method = ({ method, handleMethod, address, total, payment, handleClick, handleAddress, handleTotal, handlePayment, handleTip, deliveries, tips, handleDelete, handleUpdate, handleSave, predictions }) => {
  if (method) {
    return (
      <div className="div-method">
        <button onClick={handleMethod} value="Ticket" className="method-selected">Ticket</button>
        <button onClick={handleMethod} value="Previous Deliveries" className="method">Previous Deliveries</button>
        <Inputs address={address} total={total} payment={payment} handleClick={handleClick} handleAddress={handleAddress} handleTotal={handleTotal} handlePayment={handlePayment} predictions={predictions} />
        <AddButtons handleClick={handleClick} handleTip={handleTip} />
        <Pay deliveries={deliveries} tips={tips} />
      </div>
    )
  }
  return (
    <div className="div-method">
      <button onClick={handleMethod} value="Ticket" className="method">Ticket</button>
      <button onClick={handleMethod} value="Previous Deliveries" className="method-selected">Previous Deliveries</button>
      <Display address={address} total={total} payment={payment} handleAddress={handleAddress} handleTotal={handleTotal} handlePayment={handlePayment} deliveries={deliveries} handleDelete={handleDelete} handleUpdate={handleUpdate} handleSave={handleSave} predictions={predictions} />
    </div>
  )
}

const Update = ({ showUpdate, handleUpdate, id, address, total, payment, handleAddress, handleTotal, handlePayment, delivery, handleSave, predictions }) => {
  if (showUpdate) {
    return (
      <div className="center">
        <Inputs address={address} total={total} payment={payment} handleAddress={handleAddress} handleTotal={handleTotal} handlePayment={handlePayment} delivery={delivery} predictions={predictions} />
        <div>
          <button className="add" type="submit" onClick={handleSave} value={id}>Save</button>
        </div>
      </div>
    )
  }
  return (
    null
  )
}

const App = () => {
  const [ deliveries, setDeliveries ] = useState([])
  const [ address, setAddress ] = useState('')
  const [ total, setTotal ] = useState('')
  const [ payment, setPayment ] = useState('')
  const [ method, setMethod ] = useState(true)
  const [ tips, setTips ] = useState(0)
  const [ update, setUpdate ] = useState(false)
  const [ save, setSave ] = useState(false)
  const [ predictions, setPredictions ] = useState([])
  const [ sessiontoken, setSessiontoken ] = useState(parseInt(Math.random() * 10000000))

  useEffect(() => {
    deliveryService
    .getAll()
    .then(initialDeliveries => {
      setDeliveries(initialDeliveries)
    })
  }, [save])

  useEffect(() => {
    const params = {
      address: address,
      sessiontoken: sessiontoken
    }
    if (address.length > 0) {
      deliveryService
      .autocomplete(params)
      .then(result => {
        setPredictions(result.predictions)
        console.log(predictions)
      })
    }
  }, [address])

  const handleAddress = (event) => {
    setAddress(event.target.value)
  }

  const handleTotal = (event) => {
    setTotal(event.target.value)
  }

  const handlePayment = (event) => {
    setPayment(event.target.value)
  }

  const handleMethod = (event) => {
    if (method && event.target.value === "Ticket") {
      return
    }
    else if (method === false && event.target.value === "Previous Deliveries") {
      return
    }
    setMethod(!method)
    setAddress('')
    setTotal('')
    setPayment('')
  }

  const handleTip = (event) => {
    if (!Number.isInteger(parseInt(payment))) {
      window.alert('Enter a valid input for tip')
      setPayment('')
      return
    }
    const totalTips = tips + parseFloat(payment)
    setTips(totalTips)
    setPayment('')
  }

  const handleDelete = (event) => {
    const id = event.currentTarget.value
    if (window.confirm('Are you sure you want to delete this delivery?')) {
      deliveryService
        .remove(id)
        .then(() => {
          setDeliveries(deliveries.filter(delivery => delivery.id !== id))
        })
    }
  }

  const handleUpdate = (event) => {
    const id = event.currentTarget.value
    deliveries.map(delivery => delivery.id !== id ? delivery.update = false : delivery.update = !delivery.update)
    setUpdate(!update)
    setAddress('')
    setTotal('')
    setPayment('')
  }

  const handleSave = (event) => {
    if (!Number.isInteger(parseInt(total)) || !Number.isInteger(parseInt(payment))) {
      window.alert('Enter a valid input for total and payment')
      setTotal('')
      setPayment('')
      return
    }
    const id = event.currentTarget.value
    const delivery = deliveries.find(delivery => delivery.id === id)
    delivery.update = !delivery.update
    const newDelivery = {...delivery, address: address, total: total, payment: payment}
    deliveryService
      .update(id, newDelivery)
      .then(newDelivery => {
        setDeliveries(deliveries.map(delivery => delivery.id !== id ? delivery : newDelivery))
        setSave(!save)
      })
      .catch(error => {
        console.log('There was an error')
      })
      setAddress('')
      setTotal('')
      setPayment('')
  }

  const handleClick = (event) => {
    if (!Number.isInteger(parseInt(total)) || !Number.isInteger(parseInt(payment))) {
      window.alert('Enter a valid input for total and payment')
      setTotal('')
      setPayment('')
      return
    }

    const newDelivery = {
      address: address,
      total: total,
      payment: payment,
      update: false
    }

    deliveryService
      .create(newDelivery)
      .then(newDelivery => {
        setDeliveries(deliveries.concat(newDelivery))
        setAddress('')
        setTotal('')
        setPayment('')
        setSessiontoken(parseInt(Math.random() * 10000000))
      })

  }

  return (
    <div>
      <NavigationBar />
      <Router>
        <Method handleMethod={handleMethod} method={method} address={address} total={total} payment={payment} handleClick={handleClick} handleAddress={handleAddress} handleTotal={handleTotal} handlePayment={handlePayment} handleTip={handleTip} deliveries={deliveries} tips={tips} handleDelete={handleDelete} handleUpdate={handleUpdate} update={update} handleSave={handleSave} predictions={predictions} />
        <Switch>
        </Switch>
      </Router>
    </div>
  )
}

export default App