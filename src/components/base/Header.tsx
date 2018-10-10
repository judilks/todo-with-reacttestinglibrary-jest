import {AppBar, Toolbar, Typography} from '@material-ui/core/'
import * as React from 'react';

interface IProps {
    message?: string;
}

const Header: React.SFC<IProps> = ({message}: IProps) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" style={style}>
                        {message}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

const style = {
    display:'block',
    margin:'auto'
}

export default Header;