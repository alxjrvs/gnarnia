import { navigate } from 'hookrouter'
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useAppContext } from '../../context'
import { addGnarnian } from '../../reducer'
import { useForm } from './useForm'

interface InputProps {
  name: string
  key: string
  role: string
  power: string
}
export const NewGnarnianForm = () => {
  const [, dispatch] = useAppContext()
  const [{ name, key, role, power }, handleInputChange, handleSubmit] = useForm<
    InputProps
  >(inputs => {
    dispatch(addGnarnian(inputs))
    navigate('/')
  })

  const valid = name && key && role && power

  return (
    <>
      <Row>
        <Col>
          <h1>Create a new Gnarnian!</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                onChange={handleInputChange}
                value={name || ''}
                name="name"
                type="text"
                placeholder="Enter Gnarnian Name"
              />
            </Form.Group>
            <Form.Group controlId="formBasicKey">
              <Form.Label>Key</Form.Label>
              <Form.Control
                required
                onChange={handleInputChange}
                value={key || ''}
                name="key"
                type="text"
                placeholder="nospaces"
              />
            </Form.Group>
            <Form.Group controlId="formBasicRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                required
                onChange={handleInputChange}
                value={role || ''}
                name="role"
                type="text"
                placeholder="dev, office, or sales"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPower">
              <Form.Label>Power</Form.Label>
              <Form.Control
                required
                onChange={handleInputChange}
                value={power || ''}
                name="power"
                type="text"
                placeholder="What makes them super?"
              />
            </Form.Group>
            <Button
              disabled={!valid}
              variant="primary"
              value="SUBMIT"
              type="submit"
            >
              Create New Gnarnian
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}
