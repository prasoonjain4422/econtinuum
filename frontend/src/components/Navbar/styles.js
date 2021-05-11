import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        // maxWidth:"sm",
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 15px',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
        textDecoration: 'none',
        marginTop: '1rem',
        marginLeft: '8px',

    },
    logout: {
        borderRadius: 50,
        marginRight: '-30px',
    },
    signin: {
        borderRadius: 50,
        marginRight: '45px',
        height: '40px',
        width: '120px',
    },
    image: {
        borderRadius: 15,
        height: '50px',
        width: '50px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '270px',
    },
    profile: {
        marginLeft: '10px',
        marginRight: '-30px',
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        // marginLeft: '-10px',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        marginLeft: '-35px',
    },
}));
