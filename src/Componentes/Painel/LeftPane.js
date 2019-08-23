import React from 'react'
import { Paper, MenuItem, MenuList } from 'material-ui'

export default ({ styles }) => (
  <Paper style={styles.Paper}>
    <MenuList>
      <MenuItem>Suplementos Alimentares</MenuItem>
      <MenuItem>Pó para o preparo de alimentos</MenuItem>
      <MenuItem>Fins Especiais</MenuItem>
    </MenuList>
  </Paper>
)
