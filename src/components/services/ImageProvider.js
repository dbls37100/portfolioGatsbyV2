import React from 'react'
import HtmlLogo from '../../images/stack/html-5.png'
import CSS3Logo from '../../images/stack/css-3.png'
import ReactLogo from '../../images/stack/React.webp'
import NextLogo from '../../images/stack/nextjs.jpg'
import FirebaseLogo from '../../images/stack/firebase.png'
import MySQLLogo from '../../images/stack/mysql.png'
import GatsbyLogo from '../../images/stack/Gatsby.webp'
import ExpressLogo from '../../images/stack/Express.webp'
import NodeLogo from '../../images/stack/Node.webp'
import DjangoLogo from '../../images/stack/django.png'
import GitLogo from '../../images/stack/git.png'
import DockerLogo from '../../images/stack/docker.png'
import TailwindLogo from '../../images/stack/tailwindcss.png'
import PostGreSQLLogo from '../../images/stack/postgresql.jpg'
import StyledComponentLogo from '../../images/stack/styledComponents.jpeg'
import MaterialUILogo from '../../images/stack/materialui.png'

const ImageProvider = ({ stack }) => {
    const Provider = props => {
        switch (props.value) {
            case 'HTML':
                return (
                    <img
                        className="stackImageServices"
                        src={HtmlLogo}
                        alt="dejhfe"
                    />
                )
            case 'React':
                return (
                    <img
                        className="stackImageServices"
                        src={ReactLogo}
                        alt="dejhfe"
                    />
                )
            case 'Gatsby':
                return (
                    <img
                        className="stackImageServices"
                        src={GatsbyLogo}
                        alt="dejhfe"
                    />
                )
            case 'Next':
                return (
                    <img
                        className="stackImageServices"
                        src={NextLogo}
                        alt="dejhfe"
                    />
                )
            case 'CSS3':
                return (
                    <img
                        className="stackImageServices"
                        src={CSS3Logo}
                        alt="dejhfe"
                    />
                )
            case 'TailwindCSS':
                return (
                    <img
                        className="stackImageServices"
                        src={TailwindLogo}
                        alt="dejhfe"
                    />
                )
            case 'StyledComponent':
                return (
                    <img
                        className="stackImageServices"
                        src={StyledComponentLogo}
                        alt="dejhfe"
                    />
                )
            case 'MaterialUI':
                return (
                    <img
                        className="stackImageServices"
                        src={MaterialUILogo}
                        alt="dejhfe"
                    />
                )
            case 'Firebase':
                return (
                    <img
                        className="stackImageServices"
                        src={FirebaseLogo}
                        alt="dejhfe"
                    />
                )
            case 'PostgreSQL':
                return (
                    <img
                        className="stackImageServices"
                        src={PostGreSQLLogo}
                        alt="dejhfe"
                    />
                )
            case 'MySQL':
                return (
                    <img
                        className="stackImageServices"
                        src={MySQLLogo}
                        alt="dejhfe"
                    />
                )
            case 'Node':
                return (
                    <img
                        className="stackImageServices"
                        src={NodeLogo}
                        alt="dejhfe"
                    />
                )
            case 'Express':
                return (
                    <img
                        className="stackImageServices"
                        src={ExpressLogo}
                        alt="dejhfe"
                    />
                )
            case 'Django':
                return (
                    <img
                        className="stackImageServices"
                        src={DjangoLogo}
                        alt="dejhfe"
                    />
                )
            case 'Docker':
                return (
                    <img
                        className="stackImageServices"
                        s
                        src={DockerLogo}
                        alt="dejhfe"
                    />
                )
            case 'Eslint':
                return (
                    <img
                        className="stackImageServices"
                        s
                        src={ExpressLogo}
                        alt="dejhfe"
                    />
                )
            case 'Prettier':
                return (
                    <img
                        className="stackImageServices"
                        s
                        src={ReactLogo}
                        alt="dejhfe"
                    />
                )
            case 'Git':
                return (
                    <img
                        className="stackImageServices"
                        s
                        src={GitLogo}
                        alt="dejhfe"
                    />
                )
            default:
                return console.log('probleme')
        }
    }

    return (
        <>
            <Provider value={stack} />
        </>
    )
}

export default ImageProvider
