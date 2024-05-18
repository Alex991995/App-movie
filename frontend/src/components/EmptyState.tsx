import React from 'react'
import EmptyLogo from '../assets/emptyLogo.png';
import { Button, Image } from '@mantine/core';
import styles from '../styles/EmptyState.module.css';
import { useNavigate} from 'react-router-dom';

function EmptyState() {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapperEmptyState}>
      <Image src={EmptyLogo} />
      <h3 className={styles.titleEmptyState}>You haven't rated any films yet</h3>
      <Button radius='md' color='#9854F6' onClick={() => navigate('/movies')}>Find movies</Button>
    </div>
  )
}

export default EmptyState