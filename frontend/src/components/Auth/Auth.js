import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import { Image } from 'react-bootstrap';


import { signin, signup } from '../../actions/auth';
import useStyles from './styles';
import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup) {
            dispatch(signup(form, history));
        } else {
            dispatch(signin(form, history));
        }
    };


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        // console.log(e.target.value);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
{/* 
                        <Image
                            roundedCircle
                            className="mr-3"
                            height="80"
                            width="80"
                            src="data:image/jpeg;base64,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"
                        >
                        </Image> */}

                        {isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                                <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />
                            </>
                        )}

                        {!isSignup && (
                            <>
                                <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                            </>
                        )}

                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>

                    <Grid container >
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container >
    );
};

export default SignUp;
