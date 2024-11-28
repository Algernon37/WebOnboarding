import style from './style/RegisterForm.module.sass';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import useMatchAesthetic from '../../hooks/useMatchAesthetic';

const RegisterForm: React.FC = () => {
    const {
        user,
        email,
        password,
        error,
        handleSignUp,
        handleSignIn,
        handleInputChange,
    } = useMatchAesthetic();

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h3 className="text-center mb-4">Register or Sign In</h3>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {user ? (
                        <Alert variant="success">Welcome, {user.email}!</Alert>
                    ) : (
                        <Form>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formPassword" className="mb-3">
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                onClick={handleSignUp}
                                className="w-100 mb-2"
                            >
                                Sign Up
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={handleSignIn}
                                className="w-100"
                            >
                                Sign In
                            </Button>
                        </Form>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default RegisterForm;