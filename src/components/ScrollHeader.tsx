import React, { RefObject, useLayoutEffect, useState } from 'react';

import SearchIcon from '@material-ui/icons/Search';

import InputBase from '@material-ui/core/InputBase';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';
import dotsIcon from './../icons/forum-dots.svg';
import logoIcon from './../icons/forum-logo-text.svg';
import {ReactComponent as RegisterIcon} from './../icons/profile.svg';

import {ReactComponent as ArrowIcon} from './../icons/arrow-down.svg';

import styles from './ScrollHeader.module.scss';
import { fade, makeStyles } from '@material-ui/core';
import styled from "styled-components";
import { NONAME } from 'dns';


const classnames = require('classnames');

type Props = {
  contentRef: RefObject<HTMLDivElement>
}

const subNavigationItems = [
  {
    title: 'All A-Z',
    link: '/'
  },
  {
    title: 'Brexit',
    link: '/'
  },
  {
    title: 'Climate',
    link: '/'
  },
  {
    title: 'Copyright',
    link: '/'
  },
  {
    title: 'Migration',
    link: '/'
  },
  {
    title: 'Deb on hover',
    link: '/'
  },
  {
    title: 'Debate X',
    link: '/'
  },
]

const useStyles = makeStyles((theme) => ({
    root: {
        width:`88.758px`,
        height: `20.779px`
    },
    contained: {
      borderRadius: `54px`,
      padding: `13px 25px`,
    },
    colorPrimary: {
      backgroundColor: `#0096FF`,
    },
    textSizeMedium: {
      fontWeight: `bold`,
      textTransform: `none`,
      ['sm']: {
        display: `none`,
      },
      [theme.breakpoints.up('sm')]: {
        display: `flex`
      },
    },
    search: {
      position: 'relative',
      marginRight: theme.spacing(2),
      transition: theme.transitions.create('width', {easing: `ease-in`, duration: `1200ms`, delay: `1200ms`}),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 'auto'
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      color: '#B8C0C8',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
    },
    iconScrolling: {
      paddingRight: `calc(${theme.spacing(4)}px / 2)`
    },
    inputRoot: {
      color: '#B8C0C8',
      borderRadius: '60px',
      backgroundColor: '#E6ECF0', //fade('#E6ECF0', 0.25),//fade(, 0.15),
      '&:hover,&:active': {
        backgroundColor: '#E6ECF0',
      },
    },
    inputInput: {
      color: '#B8C0C8',
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width', {easing: `ease-in`, duration: `500ms`, delay: `100ms`}),
      alignItems: `center`,
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    navStage: {
      display:`flex`,
      flexFlow: `row nowrap`,
      justifyContent: `flex-end`,
      alignItems: `center`,
      position: `relative`,
    },
    subNavigation: {
      display: `flex`,
      position: `absolute`,
      top: `calc(64px + 1rem)`,
      left: `calc((100vw - 1030px) / 2  - 0.5rem)`,
      transition: `top 300ms ease-in 0ms,top 300ms ease-out 100ms, left 300ms ease-in-out 0ms;`
      // theme.transitions.create(['top'], {easing: `ease-in`}),
    },
    subNavList: {
      display: `flex`,
      flexFlow: `row nowrap`,
      width: `100%`,
      transition: theme.transitions.create('width'),
      listStyle: `none`,
      margin: 0,
      paddingLeft: 0,
    },
    subNavItem: {
      fontWeight: `bold`,
      opacity: `0.5`,
      marginRight: `40px`,
      '&:hover': {
        opacity: `1`,
      }
    },
    subNavItemLink: {
      textDecoration: `none`,
      color: `#132F48`,
      display: `flex`,
      flexFlow: `row nowrap`,
      alignItems: `center`,
    },
    fontSizeSmall: {
      fontSize: `10px`,
      marginLeft: `5px`,
    }
}))

const ScrollHeader = (props: Props) => {

    const classes = useStyles();

    const [scrolling, setScrolling] = useState(false);

    const onScroll = () => {
      
      if( props.contentRef.current) {
        const topPosition = props.contentRef.current.getBoundingClientRect().top;

          const scrollPosition = window.scrollY; //+ window.innerHeight;


          
          if(scrollPosition > topPosition && window.innerWidth > 576) {
            setScrolling(true);
            // trigger animation 
          } else {
            setScrolling(false);
          }
      }
    }

    useLayoutEffect(
      () => {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);


    const scrollingStyles = scrolling? {height: `81px`}: {};
    const subNavigationScrollingStyles = scrolling? {top: `2rem`, left: `calc(((100vw - 1030px) / 2 ) + 27px)`}: {};
    const inputSearchScrollingStyles = scrolling ? {
      // width: `calc(24px + 1rem)`,
      display: `flex`,
      flexFlow: `row nowrap`,
      justifyContent: `center`,
      alignItems: `center`,
    }: {};
    const inputRootScrollingStyles = scrolling ? {width: `calc(24px + 1rem)` }: {};
    return(<>
        <div className={classnames(styles.root)} style={scrollingStyles}>
          
        
        <header className={classnames(styles.Header)}>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={classnames(styles.logoBox)}>
            <img className={classnames(styles.dots)} src={dotsIcon} alt='Forum' />
            <img className={classnames(styles.logo, scrolling? styles.logoScrolling: '')} src={logoIcon} alt='Forum'/>
          </span>
        </a>


        <div className={classes.navStage}>
          <div className={classes.search}
             style={
              inputSearchScrollingStyles
            }>
            <div className={classnames(classes.searchIcon, scrolling? classes.iconScrolling: '')}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              style={inputRootScrollingStyles}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classnames(classes.contained, classes.textSizeMedium, classes.colorPrimary)}
            startIcon={<RegisterIcon />}
          >
            Register
          </Button>
        </div>

        <nav className={classes.subNavigation} style={subNavigationScrollingStyles}>
              <ul className={classes.subNavList}>
                {
                  subNavigationItems.map((item, idx) => {
                    return (
                    <li className={classes.subNavItem} key={idx}>
                      <a className={classes.subNavItemLink} href={item.link}>
                        {item.title}
                        {idx === 0? <SvgIcon className={classes.fontSizeSmall} viewBox='0 0 9 5' height='5' width='9' fontSize='small' component={ArrowIcon} />: null}
                        </a>
                    </li>)
                  })
                }
              </ul>
        </nav>
        </header>
        </div>
    </>)
}


export default ScrollHeader;