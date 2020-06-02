import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Menu.css';

const navigationElements = [
    {
        text: 'Accueil',
        link: '/',
        submenu: false,
        withSubmenu: false
    },
    {
        text: 'Rechercher',
        link: '/rechercher',
        submenu: false,
        withSubmenu: false
    },
    {
        text: 'Les recettes',
        link: '/recettes',
        submenu: false,
        withSubmenu: false
    },
    {
        text: 'Les classiques',
        link: '/classiques',
        submenu: false,
        withSubmenu: false
    },
    {
        text: 'Conseils & astuces',
        link: '/conseils-astuces',
        submenu: false,
        withSubmenu: false
    },
    {
        text: 'Dictionnaires',
        link: '/dictionnaires',
        submenu: false,
        withSubmenu: false
    },
    {
        text: 'Ebook',
        link: '/e-book',
        submenu: false,
        withSubmenu: false
    },
    {
        text: 'Envoyer ma recette',
        link: 'envoyer-recette',
        submenu: false,
        withSubmenu: false
    },
    {
        text: 'Mon Compte',
        link: '#',
        submenu: false,
        withSubmenu: true
    },
    {
        text: 'Mes favoris',
        link: '/compte/favoris',
        submenu: true,
        withSubmenu: false
    },
    {
        text: 'Ma liste de courses',
        link: '/compte/liste-courses',
        submenu: true,
        withSubmenu: false
    },
    {
        text: 'Déconnexion',
        link: '/deconnexion',
        submenu: false,
        withSubmenu: false
    }

]

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            burgerOpened: false,
        }
    }

    openMenu = () => {
        const navigationMenu = document.querySelector('#navigation-sidebar');
        const burgerMenu = document.querySelector('#burger-menu')
        navigationMenu.classList.toggle('opened');
        burgerMenu.classList.toggle('opened');
    }
    openSubmenu = () => {
        const subMenu = document.getElementsByClassName('submenu');
        for (let i = 0; i < subMenu.length; i++) {
            subMenu[i].classList.toggle('hidden');
        }
    }

    render() {
        return (
            <>
                <div className='burger-menu-container' onClick={this.openMenu}>
                    <div id='burger-menu' className='burger-menu'>
                        <span className='burger-menu-line-one' />
                        <span className='burger-menu-line-two' />
                        <span className='burger-menu-line-three' />
                    </div>
                </div >

                <div id='navigation-sidebar' className='navigation-sidebar-container' >
                    {
                        navigationElements.map(element => {
                            return (
                                <NavLink key={element.text} exact to={element.link}>
                                    <div className={element.submenu
                                        ? 'navigation-element-container submenu hidden'
                                        : element.withSubmenu
                                            ? 'navigation-element-container primary-menu with-submenu'
                                            : 'navigation-element-container primary-menu'}
                                        onClick={element.withSubmenu && this.openSubmenu}
                                    >
                                        <p>{element.text}</p>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default Menu;