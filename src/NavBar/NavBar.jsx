import React from 'react'
import { AppBar, Container, Typography} from '@material-ui/core'
const NavBar = () => {
  return (
    <div>
        <AppBar position="sticky" color="transparent">
            <Container>
                <Typography>
                    RG
                </Typography>
            </Container>
            <Container>
                <Typography>
                    ABOUT
                </Typography>
                <Typography>
                    GHG CALCULATOR
                </Typography>
                <Typography>
                    FUTURE TRENDS
                </Typography>
                <Typography>
                    CO2e VISUALIZER
                </Typography>
            </Container>
        </AppBar>
    </div>
  )
}

export default NavBar