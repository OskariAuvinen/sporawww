import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  Divider
} from 'react95';
import logoIMG from '../../assets/images/logo.png';
import galleryIMG from '../../assets/images/wia_img_color-0.png';
import storeIMG from '../../assets/images/game_mine_1-0.png';

export default {
  title: 'AppBar',
  component: AppBar,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};
const Wrapper = styled.div`
  padding: 5rem;
  background: ___CSS_0___;
`;

export const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <AppBar>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold' }}
          >
            <img
              src={logoIMG}
              alt='react95 logo'
              style={{ height: '20px', marginRight: 4 }}
            />
            Aloita
          </Button>
          {open && (
            <nav>
            <List
              style={{
                position: 'absolute',
                left: '0',
                bottom: '100%'
              }}
              onClick={() => setOpen(false)}
            >

              <ListItem>
                <span role='img' aria-label='📁'>
                  📁
                </span>
                <Link to="/">Etusivu</Link>
              </ListItem>
              <ListItem>
                <span role='img' aria-label='👨‍💻'>
                  👨‍💻
                </span>
                <Link to="/aboutus">About Us</Link>
              </ListItem>
              <ListItem>
                <img
                  src={galleryIMG}
                  alt='galleryIMG'
                  style={{ height: '20px', marginRight: 4 }}
                />
                <Link to="/gallery">Galleria</Link>
              </ListItem>
              <Divider />
              <ListItem >
                <img
                  src={storeIMG}
                  alt='storeIMG'
                  style={{ height: '20px', marginRight: 4 }}
                />
                <Link to="/store">Kauppaan</Link>
              </ListItem>
            </List>
            </nav>
          )}
        </div>

        {/* <TextField placeholder='Search...' width={150} /> */}
      </Toolbar>
    </AppBar>
  );
};

NavBar.story = {
  name: 'default'
};