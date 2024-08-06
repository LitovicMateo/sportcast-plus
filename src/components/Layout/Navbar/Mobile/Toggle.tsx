import React from 'react'

import MenuIcon from '@mui/icons-material/Menu';

import styles from './Toggle.module.css'

type ToggleProps = {
    clickHandler: () => void
}

const Toggle: React.FC<ToggleProps> = ({ clickHandler }) => {
  return (
    <div onClick={() => clickHandler()} className={styles.container}>
        <MenuIcon className={styles.icon} />
    </div>
  )
}

export default Toggle