import React from 'react'
import Grid from '@material-ui/core/Grid'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const styles = {
  Paper: { padding: 20, marginTop: 5, marginBottom: 5 }
}

export default props => (
  <Grid container spacing={1}>
    <Grid item alignContent="flex-start">
      <LeftPane styles={styles} />
    </Grid>
    <Grid item xs>
      <RightPane styles={styles} />
    </Grid>
  </Grid>
)
