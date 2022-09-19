import React from 'react';
import { Link } from "react-router-dom";
import './AppBar.css';
import {
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  Divider
} from 'react95';

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
              src={process.env.PUBLIC_URL + "assets/images/logo.png"}
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
                  <Link to="/"><div className="linkwrapper">                <img
                    className='linkwrapper_img'
                    src={process.env.PUBLIC_URL + "assets/images/directory_admin_tools-2.png"}
                    alt='HomepageIMG'
                    style={{ height: '20px', marginRight: 4 }}
                  /><p className='linkwrapper_text'>Etusivu</p></div></Link>
                </ListItem>
                <ListItem>
                  <Link to="/aboutus"><div className="linkwrapper">              <img
                    className='linkwrapper_img'
                    src={process.env.PUBLIC_URL + "assets/images/mailbox_world-2.png"}
                    alt='AboutUsIMG'
                    style={{ height: '20px', marginRight: 4 }}
                  /><p className='linkwrapper_text'>Tietoa meistä</p></div></Link>
                </ListItem>
                <ListItem>
                  <Link to="/faq"><div className="linkwrapper">               <img
                    className='linkwrapper_img'
                    src={process.env.PUBLIC_URL + "assets/images/accessibility-3.png"}
                    alt='FaqIMG'
                    style={{ height: '20px', marginRight: 4 }}
                  /><p className='linkwrapper_text'>Usein kysymättömät kysymykset</p></div></Link>
                </ListItem>
                <ListItem>
                  <Link to="/gallery"><div className="linkwrapper">                <img
                    className='linkwrapper_img'
                    src={process.env.PUBLIC_URL + "assets/images/wia_img_color-0.png"}
                    alt='galleryIMG'
                    style={{ height: '20px', marginRight: 4 }}
                  /><p className='linkwrapper_text'>Galleria</p></div></Link>
                </ListItem>
                <ListItem>
                  <Link to="/info"><div className="linkwrapper">               <img
                    className='linkwrapper_img'
                    src={process.env.PUBLIC_URL + "assets/images/help_book_cool-4.png"}
                    alt='InfoIMG'
                    style={{ height: '20px', marginRight: 4 }}
                  /><p className='linkwrapper_text'>Info</p></div></Link>
                </ListItem>
                <ListItem>
                  <Link to="/terms"><div className="linkwrapper">                <img
                    className='linkwrapper_img'
                    src={process.env.PUBLIC_URL + "assets/images/address_book-0.png"}
                    alt='galleryIMG'
                    style={{ height: '20px', marginRight: 4 }}
                  /><p className='linkwrapper_text'>Kuljetusehdot</p></div></Link>
                </ListItem>
                <ListItem>
                  <Link to="/live"><div className="linkwrapper">                <img
                    className='linkwrapper_img'
                    src={process.env.PUBLIC_URL + "assets/images/camera_vid-0.png"}
                    alt='galleryIMG'
                    style={{ height: '20px', marginRight: 4 }}
                  /><p className='linkwrapper_text'>Livestream</p></div></Link>
                </ListItem>
                <Divider />
                <ListItem >
                  <Link to="/store"><div className="linkwrapper"> <img
                    className='linkwrapper_img'
                    src={process.env.PUBLIC_URL + "assets/images/game_mine_1-0.png"}
                    alt='storeIMG'
                    style={{ height: '20px', marginRight: 4 }}
                  /><p className='linkwrapper_text'>Verkkokauppajuttuhomma</p></div></Link>
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