import { useNavigate } from 'react-router-dom';
import pageNotFoundLogo from '../assets/pageNotFound.png';

import { Button, Image } from '@mantine/core';
import styles from '../styles/EmptyState.module.css';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#eaebed' }}>
      <div style={{ maxWidth: '656px', margin: '0 auto' }}>
        <div className={styles.wrapperEmptyState}>
          <Image src={pageNotFoundLogo} />
          <h3 style={{ marginTop: '48px' }} className={styles.titleEmptyState}>
            You haven't rated any films yet
          </h3>
          <Button radius="md" color="#9854F6" onClick={() => navigate('/movies')}>
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
