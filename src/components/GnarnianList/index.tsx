import { navigate } from 'hookrouter'
import React, { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { Gnarnian, useAppContext } from '../../context'

export const GnarnianList = () => {
  const [filterDev, setFilterDev] = useState(false)
  let [{ gnarnians }] = useAppContext()

  const navigateToGnarnian = (gnarnian: Gnarnian) => () => {
    navigate(`/gnarnian/${gnarnian.key}`)
  }

  const filterOutDevs = () => {
    setFilterDev(true)
  }

  const showAll = () => {
    setFilterDev(false)
  }

  const navToNew = () => navigate('/new')

  return (
    <>
      <h2> A Handy list of Gnarnians....</h2>

      <Button
        variant="outline-primary"
        active={filterDev}
        onClick={filterOutDevs}
      >
        Filter Out Devs
      </Button>

      <Button variant="outline-primary" active={!filterDev} onClick={showAll}>
        Show All
      </Button>

      <Container fluid style={{ display: 'flex', flexWrap: 'wrap' }}>
        {gnarnians
          .filter(gnarnian => (filterDev ? gnarnian.role !== 'dev' : true))
          .map(gnarnian => (
            <Card
              key={gnarnian.key}
              style={{ display: 'flex', width: '18rem', margin: '1rem' }}
            >
              <Card.Body>
                <Card.Title>{gnarnian.name}</Card.Title>
                <Card.Text>{gnarnian.role}</Card.Text>
                <Button
                  onClick={navigateToGnarnian(gnarnian)}
                  variant="primary"
                >
                  See More!
                </Button>
              </Card.Body>
            </Card>
          ))}
        <Card style={{ display: 'flex', width: '18rem', margin: '1rem' }}>
          <Card.Body>
            <Card.Title>New Gnarnian!</Card.Title>
            <Card.Text> Who will it be? </Card.Text>
            <Button variant="outline-primary" active onClick={navToNew}>
              Add New Gnarnian!
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}
