import React from 'react'
import { EmissionState } from '../Context';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
    heroContent: {
      backgroundColor: 'white',
      padding: '2rem 0rem 1.5rem',
    },
    heroButtons: {
      marginTop: '1rem',
    },
    cardGrid: {
      paddingTop: '2rem',
      paddingBottom: '2rem',
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

const PredictedSolution = () => {
  const { selCause, solutionsReason } = EmissionState();
  const classes = useStyles();
  let options = null;
  let type = null;
  if(selCause !== ""){
    type = solutionsReason.find(reason=>reason.country === selCause);
  }
  if(type){
    options = type.reasons.map((el,index)=><li key={index}>{el}</li>)
  }
  return (
    <div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Solutions:
                    </Typography>
                    <Typography>
                        {options}
                    </Typography>
                  </CardContent>
                </Card>
        </Container>
    </div>
  )
}

export default PredictedSolution