import { Button } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
import Icon from '../assets/Arrow-icon.svg';
import { useDisclosure } from '@mantine/hooks';

function NavBar() {
  const [opened, { toggle }] = useDisclosure();
  console.log(opened);
  return (
    <div className={styles.navbar}>
      <div className={styles.boxLogo}>
        <img src={Icon} alt="icon" />
        <h3>ArrowFlicks</h3>
      </div>

      <div className={styles.boxLinks}>
        <Button
          className="linkButton"
          variant="subtle"
          color="#E5D5FA"
          radius="md"
          component={NavLink}
          to="/"
        >
          <span> Movies</span>
        </Button>
        <Button
          className="linkButton"
          variant="subtle"
          color="#E5D5FA"
          radius="md"
          component={NavLink}
          to="/rated"
        >
          <span style={{ justifyContent: 'flex-start' }}></span>Rated movies
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
