import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    const links = [
        { title: 'About', url: '/about' },
        { title: 'Contact', url: '/contact' },
        { title: 'Main', url: '/' }
    ];

    // const [links, setLinks] = useState([]);

    // useEffect(() => {
    //     fetch('/api/nav')
    //         .then(response => response.json())
    //         .then(data => {
    //             setLinks(data); // Устанавливаем полученные данные в состояние
    //         })
    //         .catch(error => {
    //             console.error('Ошибка при получении данных для навигации:', error);
    //         });
    // }, []);

    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.url}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
